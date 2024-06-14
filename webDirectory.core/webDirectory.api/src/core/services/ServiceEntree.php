<?php

namespace web\directory\api\core\services;

use web\directory\api\core\domain\Entree;

class ServiceEntree implements ServiceEntreeInterface
{


    public function getAllEntrees(): array
    {
        return Entree::all()->toArray();
    }
}