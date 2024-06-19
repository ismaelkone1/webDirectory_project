<?php

namespace web\directory\app\actions;

use web\directory\core\services\authentification\AuthService;
use web\directory\core\services\authentification\AuthServiceInterface;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Routing\RouteParser;
use Slim\Routing\RouteContext;

class RegisterPostAction extends Action
{
    private AuthServiceInterface $userService;

    public function __construct()
    {
        $this->userService = new AuthService();
    }

    public function __invoke(Request $rq, Response $rs, array $args): Response
    {
        $postData = $rq->getParsedBody();

        if (isset($postData['createaccount'])) {
            $Cuser_id = htmlspecialchars($postData['Cuser_id'], ENT_QUOTES, 'UTF-8');
            $Cpassword = htmlspecialchars($postData['Cpassword'], ENT_QUOTES, 'UTF-8');

            $args = [
                'mail' => $Cuser_id,
                'mdp' => $Cpassword
            ];

            if ($postData["Cpassword"] !== $postData["CCpassword"]) {
                $rs->getBody()->write('Les mots de passe ne correspondent pas');
                return $rs->withStatus(400)->withHeader('Content-Type', 'text/html');
            }
            $routeContext = RouteContext::fromRequest($rq);
            $routeParser = $routeContext->getRouteParser();
            $url = $routeParser->urlFor('login');
            try {
                $user = $this->userService->createUser($args);
                return $rs->withStatus(302)->withHeader('Location', $url);
            } catch (\InvalidArgumentException $e) {
                $rs->getBody()->write($e->getMessage());
                return $rs->withStatus(400)->withHeader('Content-Type', 'text/html');
            } catch (\Exception $e) {
                $rs->getBody()->write($e->getMessage());
                return $rs->withStatus(500)->withHeader('Content-Type', 'text/html');
            }
        }
    }
}