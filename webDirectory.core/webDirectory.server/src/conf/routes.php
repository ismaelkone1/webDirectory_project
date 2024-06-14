<?php

declare(strict_types=1);

use Slim\App;
use web\directory\app\actions\AuthGetAction;
use web\directory\app\actions\HomeAction;
use web\directory\app\actions\ListeEntreeAction;
use web\directory\app\actions\RegisterGetAction;
use web\directory\app\actions\RegisterPostAction;


return function (App $app) : App {
    $app->get('/', HomeAction::class)
        ->setName('home');

    $app->get(
        '/login',
        AuthGetAction::class
    )->setname('login');

    $app->get(
        '/register',
        RegisterGetAction::class
    )->setName('register');

    $app->post(
        '/register',
        RegisterPostAction::class
    );

    $app->get('/entrees',ListeEntreeAction::class)
        ->setName('entrees');

    return $app;
};
