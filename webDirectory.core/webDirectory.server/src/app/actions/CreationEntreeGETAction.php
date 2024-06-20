<?php

namespace web\directory\app\actions;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Views\Twig;
use web\directory\app\utils\CsrfService;
use web\directory\core\services\Service\ServiceServices;
use Slim\Routing\RouteContext;

class CreationEntreeGETAction extends Action
{
    public function __invoke(Request $rq, Response $rs, array $args): Response
    {
        if (!isset($_SESSION['id'])) 
        {
            // Utilisateur redirigé vers le formulaire de login s'il n'est pas authentifié
            $routeContext = RouteContext::fromRequest($rq);
            $routeParser = $routeContext->getRouteParser();
            $loginUrl = $routeParser->urlFor('login'); 
            return $rs->withStatus(302)->withHeader('Location', $loginUrl);
        }

        $serviceService = new ServiceServices();
        $listeService = $serviceService->getServices();
        $csrf = CsrfService::generate();
        $view = Twig::fromRequest($rq);
        return $view->render(
            $rs,
            'CreationEntree.twig',
            [
                'csrf' => $csrf,
                'listeService' => $listeService
            ]
        );
    }
}
