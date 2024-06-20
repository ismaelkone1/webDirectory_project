<?php
namespace web\directory\app\actions;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Views\Twig;
use web\directory\core\services\entree\ServiceEntreeInterface;
use web\directory\core\services\service\ServiceServicesInterface;
use web\directory\core\services\Service\ServiceServices;
use web\directory\core\services\Entree\ServiceEntree;

class ListeEntreeAction extends Action
{
    private ServiceServicesInterface $service;
    private ServiceEntreeInterface $entree;

    public function __construct()
    {
        $this->entree = new ServiceEntree();
        $this->service = new ServiceServices();
    }

    public function __invoke(Request $rq, Response $rs, array $args): Response
    {
        $queryParams = $rq->getQueryParams();
        $sortOptions = isset($queryParams['sortOptions']) ? $queryParams['sortOptions'] : 'none';

        // Récupérer les entrées en fonction des options de tri
        if ($sortOptions == 'none') {
            $entrees = $this->entree->getEntrees();
        } elseif ($sortOptions == 'mes_entrees') {
            $userId = $_SESSION['id'];
            $entrees = $this->entree->getEntreesByUserId($userId);
        } else {
            // Tri par service
            $entrees = $this->entree->getEntreesByService($sortOptions);
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
