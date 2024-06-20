<?php

namespace web\directory\app\actions;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use web\directory\core\services\Entree\ServiceEntreeInterface;
use web\directory\core\services\Entree\ServiceEntree;
use web\directory\core\services\authentification\AuthService;
use web\directory\core\services\authentification\AuthServiceInterface;

class ModifierEntreeAction extends Action
{
    private AuthServiceInterface $authService;
    private ServiceEntreeInterface $serviceEntree;

    public function __construct()
    {
        $this->authService = new AuthService();
        $this->serviceEntree = new ServiceEntree();
    }

    public function __invoke(Request $rq, Response $rs, array $args): Response
    {
        $data = $rq->getParsedBody();

        $entreeId = $args['id'];

        //Si le dernier élément service du tableau est vide, on le supprime
        if ($data['services'][count($data['services']) - 1] == '') {
            array_pop($data['services']);
        }

        try {
            // Appeler la méthode ModifierEntree du service
            $success = $this->serviceEntree->modifierEntree($entreeId, $data);

            if (!$success) {
                return $rs->withStatus(500);
            }

            // Rediriger vers la page des détails de l'entrée
            return $rs->withHeader('Location', '/entrees/' . $entreeId . '/details')->withStatus(302);
        } catch (\Exception $e) {
            // Gérer les erreurs
            error_log("Erreur lors de la modification de l'entrée : " . $e->getMessage());
            return $rs->withStatus(500);
        }
    }
}
