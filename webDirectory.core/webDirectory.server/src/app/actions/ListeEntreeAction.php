<?php
namespace web\directory\app\actions;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Views\Twig;
use web\directory\core\services\Entree\ServiceEntree;

class ListeEntreeAction {
    public function __invoke(Request $rq, Response $rs): Response {
        $service = new ServiceEntree();
        $entrees = $service->getEntrees();
        
        $view = Twig::fromRequest($rq);
        return $view->render(
            $rs,
            'ListeEntreeVue.twig',
            ['entrees' => $entrees]);
    }
}
