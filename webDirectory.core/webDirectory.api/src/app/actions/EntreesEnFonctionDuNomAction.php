<?php

namespace web\directory\api\app\actions;

use Slim\Psr7\Request;
use Slim\Psr7\Response;
use web\directory\api\core\services\entree\ServiceEntree;

class EntreesEnFonctionDuNomAction
{
    public function __invoke(Request $request, Response $response, $args)
    {
        $serviceEntree = new ServiceEntree();

        //On récupere le nom dans le GET
        if (!isset($request->getQueryParams()['q'])) {
            $response->getBody()->write(json_encode(['error' => 'q is required']));
            return
                $response->withHeader('Content-Type','application/json')
                    ->withStatus(400);
        }

        $nom = $request->getQueryParams()['q'];

        $entrees = $serviceEntree->getEntreeEnFonctionDuNom($nom);

        $data = [ 'type' => 'resource',
            'entree' => $entrees ];

        $response->getBody()->write(json_encode($data));

        return
            $response->withHeader('Content-Type','application/json')
                ->withHeader('Access-Control-Allow-Origin', '*')
                ->withStatus(200);
    }
}