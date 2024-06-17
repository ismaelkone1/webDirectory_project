<?php

namespace web\directory\api\app\actions;

use Slim\Psr7\Request;
use Slim\Psr7\Response;
use web\directory\api\core\services\entree\ServiceEntree;

class EntreeAction
{
    public function __invoke(Request $request, Response $response, $args)
    {
        $serviceEntree = new ServiceEntree();

        $entree = $serviceEntree->getEntree($args['id']);

        $data = [ 'type' => 'resource',
            'entree' => $entree ];

        $response->getBody()->write(json_encode($data));

        return
            $response->withHeader('Content-Type','application/json')
                ->withHeader('Access-Control-Allow-Origin', '*')
                ->withStatus(200);
    }
}