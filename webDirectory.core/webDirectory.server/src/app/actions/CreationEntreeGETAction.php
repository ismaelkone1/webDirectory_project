<?php

namespace web\directory\app\actions;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Views\Twig;
use web\directory\app\utils\CsrfService;

class CreationEntreeGETAction
{
    public function __invoke(Request $rq, Response $rs): Response
    {
        $csrf = CsrfService::generate();
        $view = Twig::fromRequest($rq);
        return $view->render(
            $rs,
            'CreationEntree.twig',
            [
                'csrf' => $csrf
            ]
        );
    }
}
