<?php

namespace web\directory\app\actions;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Views\Twig;
use web\directory\core\services\Entree\ServiceEntree;

class DetailsEntreeAction extends Action 
{
    private ServiceEntree $entreeService;

    public function __construct()
    {
        $this->entreeService = new ServiceEntree();
    }

    public function __invoke(Request $rq, Response $rs, array $args): Response
    {
        $id = $args['id'];
        try {
            $entree = $this->entreeService->getEntreeById($id);
        } catch (\Exception $e) {
            return $rs->withStatus(404);
        }

        $view = Twig::fromRequest($rq);
        return $view->render(
            $rs,
            'Entree.twig', [
                'entree' => $entree
            ]
        );
    }
}
