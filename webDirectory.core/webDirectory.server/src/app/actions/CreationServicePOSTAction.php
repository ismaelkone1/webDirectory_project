<?php

namespace web\directory\app\actions;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use web\directory\core\services\Service\ServiceServices;
use Slim\Exception\HttpNotFoundException;
use Slim\Routing\RouteContext;
use Slim\Views\Twig;

class CreationServicePOSTAction extends Action
{
    public function __invoke(Request $rq, Response $rs, array $args): Response
    {
        $twig = Twig::fromRequest($rq);
        $data = $rq->getParsedBody();
        $libelle = htmlspecialchars($data['libelle'], ENT_QUOTES, 'UTF-8');
        $etage = htmlspecialchars($data['etage'], FILTER_SANITIZE_NUMBER_INT, 'UTF-8');
        $description = htmlspecialchars($data['description'], ENT_QUOTES, 'UTF-8');

        $serviceServices = new ServiceServices();
        $data = [
            'libelle' => $libelle,
            'etage' => $etage,
            'description' => $description,
        ];

        if ($serviceServices->createService($data)) {
            return $twig->render($rs, 'createServiceSucess.twig');    
        }
    }
}