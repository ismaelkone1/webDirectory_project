<?php

declare(strict_types=1);


/* application boostrap */

use Slim\Factory\AppFactory;
use web\directory\api\utils\ConnectionBD;

$app = AppFactory::create();

$app->addRoutingMiddleware();
$app->addErrorMiddleware(true, false, false);

$app = (require_once __DIR__ . '/../conf/routes.php')($app);

ConnectionBD::init(__DIR__ . '/../conf/webDirectory.db.conf.ini.dist');

return $app;
