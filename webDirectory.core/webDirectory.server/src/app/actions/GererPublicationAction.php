<?php

namespace web\directory\app\actions;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use web\directory\core\services\Entree\ServiceEntreeInterface;
use web\directory\core\services\Entree\ServiceEntree;
use Slim\Routing\RouteContext;

class GererPublicationAction extends Action
{
    private ServiceEntreeInterface $serviceEntree;

    public function __construct()
    {
        $this->serviceEntree = new ServiceEntree();
    }

    public function __invoke(Request $rq, Response $rs, array $args): Response
    {
        $id = $args['id'] ?? null;
        $action = $args['action'] ?? null;

        if (!$id || !$action) {
            return $rs->withStatus(400); // Retourner un statut 400 en cas de paramètres manquants
        }

        try {
            if ($action === 'publier') {
                $result = $this->serviceEntree->publierEntree($id);
            } elseif ($action === 'depublier') {
                $result = $this->serviceEntree->depublierEntree($id);
            } elseif ($action === 'modifier') {
                // Récupérer les données de la requête POST par exemple
                $requestData = $rq->getParsedBody();

                // Appeler la méthode pour modifier l'entrée
                $result = $this->serviceEntree->modifierEntree($id, $requestData);
            } else {
                return $rs->withStatus(400); // Gérer les cas où l'action n'est ni "publier", "depublier" ni "modifier"
            }

            if (!$result) {
                // Redirection vers une page d'erreur ou traitement spécifique à l'erreur
                return $rs->withStatus(400); // Exemple de statut 400 pour une erreur générique
            }

            // Rediriger vers la liste des entrées avec un message de succès
            $routeParser = RouteContext::fromRequest($rq)->getRouteParser();
            return $rs->withHeader('Location', $routeParser->urlFor('liste_entree'))
                      ->withStatus(302);

        } catch (\Exception $e) {
            // Gérer toute autre exception non prévue ici
            return $rs->withStatus(500); // Erreur interne du serveur
        }
    }
}
