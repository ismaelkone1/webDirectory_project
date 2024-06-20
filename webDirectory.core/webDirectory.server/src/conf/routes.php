<?php

declare(strict_types=1);

use Slim\App;
use web\directory\app\actions\AuthGetAction;
use web\directory\app\actions\AuthPostAction;
use web\directory\app\actions\HomeAction;
use web\directory\app\actions\ListeEntreeAction;
use web\directory\app\actions\RegisterGetAction;
use web\directory\app\actions\RegisterPostAction;
use web\directory\app\actions\CreationEntreeGETAction;
use web\directory\app\actions\CreationEntreePOSTAction;
use web\directory\app\actions\CreationServiceGETAction;
use web\directory\app\actions\CreationServicePOSTAction;
use web\directory\app\actions\GetUserEntreesAction;
use web\directory\app\actions\LogoutAction;
use web\directory\app\actions\DetailsEntreeAction;
use web\directory\app\actions\GererPublicationAction;
use web\directory\app\actions\ModifierEntreeAction;
use web\directory\app\actions\GestionAdminAction;
use \web\directory\app\actions\DetailUserAction;
use \web\directory\app\actions\CreateUserAction;

return function (App $app): App {
    $app->get('/', HomeAction::class)
        ->setName('home');

    $app->get(
        '/login',
        AuthGetAction::class
    )->setname('login');

    $app->post(
        '/login',
        AuthPostAction::class
    )->setname('login');

    $app->get(
        '/register',
        RegisterGetAction::class
    )->setName('register');

    $app->post(
        '/register',
        RegisterPostAction::class
    )->setName('register');

    $app->get(
        '/logout',
        LogoutAction::class
    )->setName('logout');

    $app->get('/entrees', ListeEntreeAction::class)
        ->setName('entrees');

    $app->get('/creationEntree', CreationEntreeGETAction::class)
        ->setName('creationEntreeGET');

    $app->post('/creationEntree', CreationEntreePOSTAction::class)
        ->setName('creationEntreePOST');

    $app->get('/creationService',CreationServiceGETAction::class)
        ->setName('creationServiceGET');
    
    $app->post('/creationService',CreationServicePOSTAction::class)
        ->setName('creationServicePOST');

    $app->get('/entrees/{id}/details', DetailsEntreeAction::class)
        ->setName(('details_entree'));
    
    $app->get('/entree/{id}/{action:publier|depublier}', GererPublicationAction::class)
        ->setName('gerer_publication');  

    $app->post('/entree/modifier/{id}', ModifierEntreeAction::class)
        ->setName('modifier_entree');

    $app->get('/gestion_admin', GestionAdminAction::class)
        ->setName('gestion_admin');

    $app->get('/user/{id}', DetailUserAction::class)
        ->setName('user_details');

    $app->post('/create_user', CreateUserAction::class)
        ->setName('create_user');


    return $app;
};
