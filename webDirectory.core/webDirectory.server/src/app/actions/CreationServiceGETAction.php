<?php

namespace web\directory\app\actions;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Views\Twig;
use Slim\Routing\RouteContext;

class CreationServiceGETAction extends Action
{
    public function __invoke(Request $rq, Response $rs, array $args): Response
    {
        if (!isset($_SESSION['id'])) 
        {
            // Utilisateur redirigé vers le formulaire de login s'il n'est pas authentifié
            $routeContext = RouteContext::fromRequest($rq);
            $routeParser = $routeContext->getRouteParser();
            $loginUrl = $routeParser->urlFor('login'); 
            return $rs->withStatus(302)->withHeader('Location', $loginUrl);
        }

        $view = Twig::fromRequest($rq);
        return $view->render(
            $rs,
            'createService.twig'
        );
    }
}
