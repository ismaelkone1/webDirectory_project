<?php

declare(strict_types=1);

use web\directory\utils\ConnectionBD;
use Slim\App;
use web\directory\app\actions\HomeAction;

return function (App $app): App {
    $app->get('/', HomeAction::class)
        ->setName('home');
    return $app;
};
