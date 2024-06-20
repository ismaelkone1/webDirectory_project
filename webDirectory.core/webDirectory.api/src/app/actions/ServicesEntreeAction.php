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
        $query = $request->getQueryParams();

        if (!isset($args['id'])) {
            $response->getBody()->write(json_encode(['error' => 'id is required']));
            return
                $response->withHeader('Content-Type', 'application/json')
                ->withStatus(400);
        }

        $sort = $query['sort'] ?? '';

        //On sépare le sort en deux parties
        $sort = explode('-', $sort);

        if (!isset($query['q']) && !isset($query['sort'])) {
            $entrees = $serviceServices->getEntreesDuService($args['id']);
        }
        else if (!isset($query['q'])) {
            $entrees = $serviceServices->getEntreesDuServiceOrder($args['id'], $sort);
        }
        else if (!isset($query['sort'])) {
            $nom = $query['q'];
            $entrees = $serviceServices->getEntreesDuServiceEnFonctionDuNom($args['id'], $nom);
        }
        else {
            $nom = $query['q'];
            $entrees = $serviceServices->getEntreesDuServiceEnFonctionDuNomOrder($args['id'], $nom, $sort);
        }

        $entrees = array_map(function ($entree) {
            return [
                'nom' => $entree['nom'],
                'prenom' => $entree['prenom'],
                'services' => $entree['services'],
                'url' => '/api/entrees/' . $entree['id']
            ];
        }, $entrees);

        $data = [
            'type' => 'resource',
            'entrees' => $entrees
        ];

        $response->getBody()->write(json_encode($data));

        return
            $response->withHeader('Content-Type', 'application/json')
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withStatus(200);
    }
}
