<?php

namespace web\directory\app\actions;

use Slim\Views\Twig;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use web\directory\core\services\authentification\AuthService;
use web\directory\core\services\authentification\AuthServiceInterface;

class GestionAdminAction extends Action
{
    private AuthServiceInterface $authService;

    public function __construct()
    {
        $this->authService = new AuthService();
    }

    public function __invoke(Request $rq, Response $rs, array $args): Response
    {
        $users = $this->authService->getUsers();

        $view = Twig::fromRequest($rq);
        return $view->render($rs, 'Admin.twig', [
            'users' => $users
        ]);
    }
}
