<?php

namespace web\directory\app\actions;
use Slim\Views\Twig;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class LogoutAction
{   
    public function __invoke(Request $rq, Response $rs, array $args): Response
    {
        session_destroy();
        $routeContext = \Slim\Routing\RouteContext::fromRequest($rq);
        $routeParser = $routeContext->getRouteParser();
        $url = $routeParser->urlFor('home');
        return $rs->withStatus(302)->withHeader('Location', $url);
    }
}