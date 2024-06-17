<?php

namespace web\directory\app\actions;

use Exception;
use web\directory\core\services\authentification\AuthServiceInterface;
use web\directory\core\services\authentification\AuthService;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Slim\Routing\RouteParser;
use Slim\Routing\RouteContext;
use web\directory\app\actions\Action;

class AuthPostAction extends Action
{
    private AuthServiceInterface $authService;

    public function __construct()
    {
        $this->authService = new AuthService();
    }

    public function __invoke(ServerRequestInterface $request, ResponseInterface $response, array $args): ResponseInterface
    {
        try {
            $postData = $request->getParsedBody();
    
            // récupération des credentials entrées dans le formulaire
            $user_id = $postData['user_id'] ?? '';
            $user_id = htmlspecialchars($user_id, ENT_QUOTES, 'UTF-8');
            $password = $postData['password'] ?? '';
            $password = htmlspecialchars($password, ENT_QUOTES, 'UTF-8');
    
            // vérification des credentials
            if ($this->authService->checkPasswordValid($password, $user_id)) {
                var_dump($postData);
                // Connexion réussie
                $user = $this->authService->connectUser(['id' => $user_id]);
                var_dump($user);
                if ($user) {
                    $routeContext = RouteContext::fromRequest($request);
                    $routeParser = $routeContext->getRouteParser();
    
                    // redirection après connexion
                    $url = $routeParser->urlFor('home');
                    return $response->withStatus(302)->withHeader('Location', $url);
                } else {
                    $response->getBody()->write('Utilisateur non trouvé');
                    return $response->withStatus(401);
                }
            } else {
                $response->getBody()->write('Identifiants incorrects');
                return $response->withStatus(401);
            }
        } catch (\Exception $e) {
            $response->getBody()->write('Une erreur est survenue. Veuillez réessayer plus tard.');
            return $response->withStatus(500);
        }
    }
}
