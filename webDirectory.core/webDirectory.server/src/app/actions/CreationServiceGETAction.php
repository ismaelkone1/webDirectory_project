<?php

namespace web\directory\app\actions;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Views\Twig;

class CreationServiceGETAction
{
    public function __invoke(Request $rq, Response $rs): Response
    {
        $view = Twig::fromRequest($rq);
        return $view->render(
            $rs,
            'createService.twig'
        );
    }
}
