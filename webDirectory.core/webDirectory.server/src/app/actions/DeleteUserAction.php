<?php

namespace web\directory\app\actions;

use Slim\Views\Twig;
use Slim\Routing\RouteParser;
use Slim\Routing\RouteContext;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use web\directory\core\services\authentification\AuthService;
use web\directory\core\services\authentification\AuthServiceInterface;

class DeleteUserAction extends Action
{
    private AuthServiceInterface $authService;

    public function __construct()
    {
        $this->authService = new AuthService();
    }

    public function __invoke(Request $rq, Response $rs, array $args): Response
    {
        $userId = $args['id'];

        try {
            // Supprimer l'utilisateur par son ID
            $this->authService->deleteUserByID($userId);

            // Redirection après suppression
            $routeContext = RouteContext::fromRequest($rq);
            $routeParser = $routeContext->getRouteParser();
            $url = $routeParser->urlFor('gestion_admin');
            return $rs->withStatus(302)->withHeader('Location', $url);
        } catch (\Exception $e) {
            // Gérer les erreurs
            error_log("Erreur lors de la suppression de l'utilisateur : " . $e->getMessage());
            return $rs->withStatus(500);
        }
    }
}
