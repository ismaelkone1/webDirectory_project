<?php

namespace web\directory\api\app\actions;

use Slim\Psr7\Request;
use Slim\Psr7\Response;
use web\directory\api\core\services\services\ServiceServices;

class ServicesAction
{
    public function __invoke(Request $request, Response $response, $args)
    {
        $serviceServices = new ServiceServices();

        $services = $serviceServices->getAllServices();

        $data = [ 'type' => 'resource',
            'services' => $services ];

        $response->getBody()->write(json_encode($data));

        return
            $response->withHeader('Content-Type','application/json')
                ->withHeader('Access-Control-Allow-Origin', '*')
                ->withStatus(200);
    }
}