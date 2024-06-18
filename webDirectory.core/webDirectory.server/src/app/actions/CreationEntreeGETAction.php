<?php

namespace web\directory\app\actions;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Views\Twig;
use web\directory\app\utils\CsrfService;
use web\directory\core\services\Service\ServiceServices;

class CreationEntreeGETAction extends Action
{
    public function __invoke(Request $rq, Response $rs, array $args): Response
    {
        $serviceService = new ServiceServices();
        $listeService = $serviceService->getServices();
        $csrf = CsrfService::generate();
        $view = Twig::fromRequest($rq);
        return $view->render(
            $rs,
            'CreationEntree.twig',
            [
                'csrf' => $csrf,
                'listeService' => $listeService
            ]
        );
    }
}
