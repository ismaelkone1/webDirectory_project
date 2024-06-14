<?php

namespace web\directory\app\actions;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Views\Twig;

class CreationEntreePOSTAction
{
    public function __invoke(Request $rq, Response $rs): Response
    {



        return $rs->withStatus(302)->withHeader('Location', '/creationEntree');
    }
}
