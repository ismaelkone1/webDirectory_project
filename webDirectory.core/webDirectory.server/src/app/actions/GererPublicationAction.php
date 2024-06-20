<?php

namespace web\directory\app\actions;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Views\Twig;
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
            return $rs->withStatus(400);
        }

        if ($action === 'publier') {
            $result = $this->serviceEntree->publierEntree($id);
        } elseif ($action === 'depublier') {
            $result = $this->serviceEntree->depublierEntree($id);
        } else {
            return $rs->withStatus(400);
        }

        // Préparer le message à afficher en fonction de l'action
        $message = '';
        if ($action === 'publier' && $result) {
            $message = 'Entrée publiée avec succès !';
        } elseif ($action === 'depublier' && $result) {
            $message = 'Entrée dépubliée avec succès !';
        } else {
            $message = 'Action réalisée avec succès !';
        }

        // Rendre le template PublicationSuccess.twig avec le message approprié
        $view = Twig::fromRequest($rq);
        return $view->render(
            $rs,
            'PublicationSuccess.twig',
            ['message' => $message, 'action' => $action]  // Passer 'action' à Twig pour la condition
        );
    }
}
