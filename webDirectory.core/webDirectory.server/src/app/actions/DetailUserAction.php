<?php

namespace web\directory\app\actions;

use Slim\Views\Twig;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use web\directory\core\services\authentification\AuthServiceInterface;
use web\directory\core\domain\Utilisateur; // Assurez-vous d'importer la classe Utilisateur appropriée
use web\directory\core\services\authentification\AuthService;

class DetailUserAction extends Action
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
            // Récupérer l'utilisateur par son ID
            $user = $this->authService->getUsersById($userId);

            if (!$user) {
                return $rs->withStatus(404);
            }

            // Rendre la vue Twig avec les détails de l'utilisateur
            $view = Twig::fromRequest($rq);
            return $view->render($rs, 'UserDetails.twig', [
                'user' => $user
            ]);
        } catch (\Exception $e) {
            $rs->getBody()->write('Une erreur est survenue.' . $e);
            return $rs->withStatus(400);
        }
    }
}
