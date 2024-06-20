<?php

namespace web\directory\app\actions;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use web\directory\core\services\Entree\ServiceEntreeInterface;
use web\directory\core\services\Entree\ServiceEntree;

class SupprimerEntreeAction extends Action
{
    private ServiceEntreeInterface $serviceEntree;

    public function __construct()
    {
        $this->serviceEntree = new ServiceEntree();
    }

    public function __invoke(Request $rq, Response $rs, array $args): Response
    {
        $entreeId = $args['id'];

        try {
            // Appeler la méthode supprimerEntree du service
            $success = $this->serviceEntree->supprimerEntree(intval($entreeId));

            if (!$success) {
                return $rs->withStatus(500);
            }

            // Rediriger vers la liste des entrées
            return $rs->withHeader('Location', '/entrees')->withStatus(302);
        } catch (\Exception $e) {
            // Gérer les erreurs
            error_log("Erreur lors de la suppression de l'entrée : " . $e->getMessage());
            return $rs->withStatus(500);
        }
    }
}
