<?php

namespace web\directory\app\actions;

use Slim\Views\Twig;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class AuthGetAction extends Action
{
    public function __invoke(Request $rq, Response $rs, array $args): Response
    {
        $view = Twig::fromRequest($rq);
        return $view->render($rs, 'authFormulaire.twig');
    }
}