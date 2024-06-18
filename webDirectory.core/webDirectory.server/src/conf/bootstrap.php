<?php

declare(strict_types=1);

use web\directory\utils\ConnectionBD;
use Slim\Factory\AppFactory;

$app = AppFactory::create();

$app->addRoutingMiddleware();
$app->addErrorMiddleware(true, false, false);

$app = (require_once __DIR__ . '/../conf/routes.php')($app);

ConnectionBD::init(__DIR__ . '/../conf/webDirectory.db.conf.ini');

$twig = \Slim\Views\Twig::create(
    __DIR__ . '/../app/views',
    [
        'cache' => false,
        'debug' => true,
        'auto_reload' => true
    ]
);

$twig->addExtension(new \Twig\Extension\DebugExtension());


$environment = $twig->getEnvironment();
$environment->addGlobal('session', $_SESSION);

$app->add(\Slim\Views\TwigMiddleware::create($app, $twig));

return $app;