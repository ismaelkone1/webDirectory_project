<?php

namespace web\directory\app\actions;

use Slim\Views\Twig;
use Slim\Routing\RouteParser;
use Slim\Routing\RouteContext;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use web\directory\core\services\authentification\AuthService;
use web\directory\core\services\authentification\AuthServiceInterface;

class CreateUserAction extends Action
{
    private AuthServiceInterface $authService;

    public function __construct()
    {
        $this->authService = new AuthService();
    }

    public function __invoke(Request $rq, Response $rs, array $args): Response
    {
        $postData = $rq->getParsedBody();

        // Vérifier si les données du formulaire sont présentes
        if (isset($postData['mail'], $postData['mdp'])) {
            $mail = htmlspecialchars($postData['mail'], ENT_QUOTES, 'UTF-8');
            $mdp = htmlspecialchars($postData['mdp'], ENT_QUOTES, 'UTF-8');

            $args = [
                'mail' => $mail,
                'mdp' => $mdp
                // Ajoutez d'autres champs si nécessaire
            ];

            try {
                // Appeler la méthode de service pour créer l'utilisateur
                $this->authService->createUser($args);

                // Redirection après création
                $routeContext = RouteContext::fromRequest($rq);
                $routeParser = $routeContext->getRouteParser();
                $url = $routeParser->urlFor('gestion_admin'); // Assurez-vous d'avoir un nom de route approprié
                return $rs->withStatus(302)->withHeader('Location', $url);
            } catch (\InvalidArgumentException $e) {
                // Gérer les erreurs de validation
                $view = Twig::fromRequest($rq);
                return $view->render($rs, 'Admin.twig', [
                    'error' => $e->getMessage(),
                    'users' => $this->authService->getUsers() // Mettez à jour la liste des utilisateurs
                ]);
            } catch (\Exception $e) {
                // Gérer les autres erreurs
                error_log("Erreur lors de la création de l'utilisateur : " . $e->getMessage());
                return $rs->withStatus(500);
            }
        }

        return $rs->withStatus(400);
    }
}
