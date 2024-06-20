<?php

namespace web\directory\api\app\actions;

use Slim\Psr7\Request;
use Slim\Psr7\Response;

class ImageAction
{
    public function __invoke(Request $request, Response $response, $args)
    {
        if (!isset($request->getQueryParams()['name'])) {
            $response->getBody()->write(json_encode(['error' => 'name is required']));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(400);
        }

        $imageName = $request->getQueryParams()['name'];
        $imagePath = "/var/www/uploadImages/" . $imageName;

        if (file_exists($imagePath)) {
            $imageContent = file_get_contents($imagePath);
            $response->getBody()->write($imageContent);

            return $response->withHeader('Content-Type', mime_content_type($imagePath))
                ->withHeader('Access-Control-Allow-Origin', '*')
                ->withStatus(200);
        } else {
            return $response->withStatus(404);
        }
    }
}