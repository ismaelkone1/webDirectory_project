<?php

namespace web\directory\api\app\actions;

use web\directory\api\core\services\services\ServiceServices;
use Slim\Psr7\Request;
use Slim\Psr7\Response;
class ServicesEntreeAction
{

    public function __invoke(Request $request, Response $response, $args)
    {
        $serviceServices = new ServiceServices();

        if (!isset($args['id'])) {
            $response->getBody()->write(json_encode(['error' => 'id is required']));
            return
                $response->withHeader('Content-Type','application/json')
                    ->withStatus(400);
        }

        $entrees = $serviceServices->getEntreesDuService($args['id']);

        //TODO : Modifier l'url une fois le serveur déployé
        $entrees = array_map(function($entree) {
            return [
                'nom' => $entree['nom'],
                'prenom' => $entree['prenom'],
                'services' => $entree['services'],
                'url' => 'http://localhost:20003/api/entrees/'.$entree['id']
            ];
        }, $entrees);

        $data = [ 'type' => 'resource',
            'entrees' => $entrees ];

        $response->getBody()->write(json_encode($data));

        return
            $response->withHeader('Content-Type','application/json')
                ->withHeader('Access-Control-Allow-Origin', '*')
                ->withStatus(200);
    }
}