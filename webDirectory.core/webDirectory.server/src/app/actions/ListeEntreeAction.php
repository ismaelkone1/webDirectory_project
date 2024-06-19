<?php
namespace web\directory\app\actions;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Views\Twig;
use web\directory\core\services\Service\ServiceServices;
use web\directory\core\services\Entree\ServiceEntree;

class ListeEntreeAction extends Action
{
    private ServiceServices $service;
    private ServiceEntree $entree;

    public function __construct()
    {
        $this->entree = new ServiceEntree();
        $this->service = new ServiceServices();
    }

    public function __invoke(Request $rq, Response $rs, array $args): Response
    {
        $queryParams = $rq->getQueryParams();
        $sortOptions = isset($queryParams['sortOptions']) && $queryParams['sortOptions'] !== '' ? $queryParams['sortOptions'] : 'none';
        $serviceOptions = ($sortOptions === 'none');
        $sortName = isset($queryParams['searchByName']) && $queryParams['searchByName'] !== '' ? $queryParams['searchByName'] : 'none';
        $servicesName = ($sortName === 'none');

        if (!$serviceOptions && !$servicesName) {
            $entrees = $this->entree->getEntreesByNomAndService($queryParams['searchByName'], $queryParams['sortOptions']);
        } else if (!$serviceOptions && $servicesName) {
            $entrees = $this->entree->getEntreesByService($queryParams['sortOptions']);
        } else if ($serviceOptions && !$servicesName) {
            $entrees = $this->entree->getEntreesByNom($queryParams['searchByName']);
        } else {
            $entrees = $this->entree->getServices();    
        }
        

        $view = Twig::fromRequest($rq);
        return $view->render(
            $rs,
            'ListeEntreeVue.twig',
            [
                'entrees' => $entrees,
                'services' => $this->service->getServices(),
                'currentSortOption' => $sortOptions,
            ]
        );
    }
}
