<?php

namespace web\directory\app\actions;

use Exception;
use web\directory\core\services\authentification\AuthServiceInterface;
use web\directory\core\services\authentification\AuthService;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Slim\Routing\RouteContext;
use web\directory\app\actions\Action;
use Slim\Views\Twig;

class AuthPostAction extends Action
{
    private AuthServiceInterface $authService;

    public function __construct()
    {
        $this->authService = new AuthService();
    }

    public function __invoke(ServerRequestInterface $rq, ResponseInterface $rs, array $args): ResponseInterface
    {
        try {
            $twig = Twig::fromRequest($rq);
            $postData = $rq->getParsedBody();
    
            // récupération des credentials entrées dans le formulaire
            $user_id = $postData['user_id'] ?? '';
            $user_id = htmlspecialchars($user_id, ENT_QUOTES, 'UTF-8');
            $password = $postData['password'] ?? '';
            $password = htmlspecialchars($password, ENT_QUOTES, 'UTF-8');
    
            // vérification des credentials
            if ($this->authService->checkPasswordValid($password, $user_id)) {
                // Connexion réussie
                $user = $this->authService->connectUser(['id' => $user_id]);
                session_start();
                if ($user) {
                    $routeContext = RouteContext::fromRequest($rq);
                    $routeParser = $routeContext->getRouteParser();
    
                    // redirection après connexion
                    $url = $routeParser->urlFor('home');
                    return $rs->withStatus(302)->withHeader('Location', $url);
                }
            } else {
                return $twig->render($rs,'authFormulaire.twig',
                    [
                        'error' => 1,
                    ]);
            }
        } catch (Exception $e) {
            $rs->getBody()->write('Une erreur est survenue. Veuillez réessayer plus tard : ' . $e->getMessage());
            return $rs->withStatus(500);
        }
    }
}
