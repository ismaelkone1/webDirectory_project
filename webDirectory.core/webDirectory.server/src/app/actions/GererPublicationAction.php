<?php

namespace web\directory\app\actions;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Views\Twig;
use web\directory\app\utils\CsrfService;
use web\directory\core\services\Entree\ServiceEntreeInterface;
use web\directory\core\services\Entree\ServiceEntree;
use web\directory\core\services\Service\ServiceServices;
use Slim\Routing\RouteContext;

class GererPublicationAction extends Action
{
    private ServiceEntreeInterface $serviceEntree;

    public function __construct(ServiceEntreeInterface $serviceEntree)
    {
        $this->serviceEntree = $serviceEntree;
    }

    public function __invoke(Request $rq, Response $rs, array $args): Response
    {
        $id = $args['id'];
        $action = $args['action'];

        if ($action === 'publier') {
            $result = $this->serviceEntree->publierEntree($id);
        } elseif ($action === 'depublier') {
            $result = $this->serviceEntree->depublierEntree($id);
        } else {
            // Gérer les cas où l'action n'est ni "publier" ni "depublier"
            // Par exemple, une erreur de requête
            return $rs->withStatus(400);
        }

        if ($result) {
            $message = ($action === 'publier') ? 'Entrée publiée avec succès' : 'Entrée dépubliée avec succès';
        } else {
            $message = 'Échec de la mise à jour de l\'état de publication';
        }

        // Rediriger vers la liste des entrées avec un message flash
        $routeParser = RouteContext::fromRequest($rq)->getRouteParser();
        return $rs
            ->withHeader('Location', $routeParser->urlFor('liste_entree'))
            ->withStatus(302);
    }
}
