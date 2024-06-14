<?php

namespace web\directory\api\core\services;

class ServiceEntree implements ServiceEntreeInterface
{


    public function getAllEntrees(): array
    {
        return Entree::all()->toArray();
    }
}