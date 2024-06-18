<?php
namespace web\directory\app\actions;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Views\Twig;
use web\directory\core\services\Entree\ServiceEntree;
use web\directory\core\services\Service\ServiceServices;

class ListeEntreeAction {
    public function __invoke(Request $rq, Response $rs): Response {
        $queryParams = $rq->getQueryParams();
        $sortOptions = isset($queryParams['sortOptions']) ? $queryParams['sortOptions'] : 'none';
        $serviceOptions = ($sortOptions == 'none');
        
        $servEntree = new ServiceEntree();
        $servService = new ServiceServices();
        if($serviceOptions){
            $entrees = $servEntree->getEntrees();
        } else {
            $entrees = $servEntree->getEntreeByService($sortOptions);
        }
        
        $view = Twig::fromRequest($rq);
        return $view->render(
            $rs,
            'ListeEntreeVue.twig',[
                'entrees' => $entrees,
                'services' => $servService->getServices(),
                'currentSortOption' => $sortOptions,
            ]);
    }
}
