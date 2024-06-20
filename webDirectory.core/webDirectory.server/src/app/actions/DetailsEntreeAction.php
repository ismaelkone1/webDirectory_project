<?php

namespace web\directory\app\actions;

use Slim\Views\Twig;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use web\directory\core\domain\Entree;
use web\directory\core\domain\Service;

class DetailsEntreeAction extends Action
{
    public function __invoke(Request $rq, Response $rs, array $args): Response
    {
        $entreeId = $args['id'];

        try {
            // Récupérer l'entrée par son ID
            $entree = Entree::find($entreeId);

            if (!$entree) {
                return $rs->withStatus(404);
            }

            // Récupérer la liste des services
            $services = Service::all();

            // Rendre la vue Twig avec les détails de l'entrée et la liste des services
            $view = Twig::fromRequest($rq);
            return $view->render($rs, 'Entree.twig', [
                'entree' => $entree,
                'listeService' => $services
            ]);
        } catch (\Exception $e) {
            // Gérer les erreurs
            error_log("Erreur lors de la récupération des détails de l'entrée : " . $e->getMessage());
            return $rs->withStatus(500);
        }
    }
}
