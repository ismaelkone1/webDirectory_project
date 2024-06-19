<?php

namespace web\directory\api\app\actions;

use Slim\Psr7\Request;
use Slim\Psr7\Response;
use web\directory\api\core\services\entree\ServiceEntree;

class EntreesAction
{

    public function __invoke(Request $request, Response $response, $args)
    {
        $query = $request->getQueryParams();
        $sort = $query['sort'] ?? '';

        //On sépare le sort en deux parties
        $sort = explode('-', $sort);

        $serviceEntree = new ServiceEntree();

        if(isset($query['sort'])) {
            $allEntrees = $serviceEntree->getAllEntreesOrderByNom($sort);
        } else {
            $allEntrees = $serviceEntree->getAllEntrees();
        }

        $entrees = [];

        foreach ($allEntrees as $key => $entree) {
            $entrees[$key] = [
                'nom' => $entree['nom'],
                'prenom' => $entree['prenom'],
                'services' => $entree['services'],
                'url' => '/api/entrees/'.$entree['id']
            ];
        }

        $data = [ 'type' => 'resource',
            'entrees' => $entrees ];

        $response->getBody()->write(json_encode($data));

        //On mett dans le header "Access-Control-Allow-Origin: *"
        return
            $response->withHeader('Content-Type','application/json')
                ->withHeader('Access-Control-Allow-Origin', '*')
                ->withStatus(200);
    }
}