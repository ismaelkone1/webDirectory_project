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
    private ServiceEntree $entree;

    public function __construct()
        {
            $this->entree = new ServiceEntree();
            $this->service = new ServiceServices();
        }

    public function __invoke(Request $rq, Response $rs, array $args): Response
        {
        $queryParams = $rq->getQueryParams();
        $sortOptions = isset($queryParams['sortOptions']) ? $queryParams['sortOptions'] : 'none';
        $serviceOptions = ($sortOptions == 'none');
        
        if($serviceOptions){
            $entrees = $this->entree->getServices();
        } else {
            $entrees = $this->entree->getEntreeByService($sortOptions);
        }
            
            $view = Twig::fromRequest($rq);
            return $view->render(
                $rs,
                'ListeEntreeVue.twig',[
                    'entrees' => $entrees,
                'services' => $this->service->getServices(),
                'currentSortOption' => $sortOptions,
            ]);
        }
}
