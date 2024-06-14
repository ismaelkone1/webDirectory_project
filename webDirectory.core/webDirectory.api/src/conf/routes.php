<?php

declare(strict_types=1);

use web\directory\api\app\actions\EntreesAction;
use web\directory\api\app\actions\ServicesAction;
use web\directory\api\app\actions\ServicesEntreeAction;

return function (\Slim\App $app): \Slim\App {

    $app->get('/api/services', ServicesAction::class)
        ->setName('services');

    $app->get('/api/entrees', EntreesAction::class)
        ->setName('entrees');

    $app->get('/api/services/{id}/entrees', ServicesEntreeAction::class)
        ->setName('serviceEntrees');

    return $app;
};
