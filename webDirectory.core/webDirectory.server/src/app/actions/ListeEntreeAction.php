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
    {
        $this->entree = new ServiceEntree();
        $this->service = new ServiceServices();
    }

    public function __invoke(Request $rq, Response $rs, array $args): Response
    {
    {
        $queryParams = $rq->getQueryParams();
        $sortOptions = isset($queryParams['sortOptions']) ? $queryParams['sortOptions'] : 'none';

        // Récupérer les entrées en fonction des options de tri
        if ($sortOptions == 'none') {
            $entrees = $this->entree->getServices();
        } elseif ($sortOptions == 'mes_entrees' && isset($_SESSION['id'])) {
            $userId = $_SESSION['id'];
            $entrees = $this->entree->getEntreesByUserId($userId);
        } else {
            $entrees = $this->entree->getEntrees();    
        }

        // Ajouter une option de tri pour l'utilisateur connecté si un utilisateur est connecté
        $userConnected = isset($_SESSION['id']);
        $services = $this->service->getServices();


        $view = Twig::fromRequest($rq);
        return $view->render(
            $rs,
            'ListeEntreeVue.twig', [
                'entrees' => $entrees,
                'services' => $services,
                'currentSortOption' => $sortOptions,
                'userConnected' => $userConnected
            ]
        );
    }
}
