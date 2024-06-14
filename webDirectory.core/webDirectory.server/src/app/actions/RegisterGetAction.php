<?php

namespace web\directory\app\actions;
use Slim\Views\Twig;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class RegisterGetAction extends Action
{
    public function __invoke(Request $request, Response $response, array $args): Response
    {
        $view = TWig::fromRequest($request);
        return $view->render($response, 'registerForm.twig');
    }
}