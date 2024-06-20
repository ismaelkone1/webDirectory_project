<?php

declare(strict_types=1);

use web\directory\api\app\actions\EntreeAction;
use web\directory\api\app\actions\EntreesAction;
use web\directory\api\app\actions\EntreesEnFonctionDuNomAction;
use web\directory\api\app\actions\ImageAction;
use web\directory\api\app\actions\ServicesAction;
use web\directory\api\app\actions\ServicesEntreeAction;

return function (\Slim\App $app): \Slim\App {

    $app->get('/api/services', ServicesAction::class)
        ->setName('services');

    $app->get('/api/entrees', EntreesAction::class)
        ->setName('entrees');

    $app->get('/api/services/{id}/entrees', ServicesEntreeAction::class)
        ->setName('serviceEntrees');

    $app->get('/api/entrees/search', EntreesEnFonctionDuNomAction::class)
        ->setName('entreeEnFonctionDuNom');

    $app->get('/api/entrees/{id}', EntreeAction::class)
        ->setName('entree');

    $app->get('/api/image', ImageAction::class)
        ->setName('image');

    return $app;
};
