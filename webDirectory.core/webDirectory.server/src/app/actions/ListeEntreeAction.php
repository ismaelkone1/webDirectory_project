<?php
namespace web\directory\app\actions;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Views\Twig;
use web\directory\core\services\Service\ServiceServices;
use web\directory\core\services\Service\ServiceServicesInterface;
use web\directory\core\services\Entree\ServiceEntree;

class ListeEntreeAction extends Action 
{
    private ServiceServices $service;

    public function __construct()
        {
            $this->service = new ServiceServices();
        }

    public function __invoke(Request $rq, Response $rs, array $args): Response
        {
            $service = new ServiceEntree();
            $entrees = $service->getEntrees();
            
            $view = Twig::fromRequest($rq);
            return $view->render(
                $rs,
                'ListeEntreeVue.twig',
                ['entrees' => $entrees]);
        }
}
