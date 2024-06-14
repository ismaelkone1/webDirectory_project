<?php 
declare(strict_types=1);

use Slim\App;
use web\directory\app\actions\HomeAction;
use web\directory\app\actions\ListeEntreeAction;

return function (App $app) : App {
    $app->get('/', HomeAction::class)
        ->setName('home');

    $app->get('/entrees',ListeEntreeAction::class)
        ->setName('entrees');

    return $app;
};