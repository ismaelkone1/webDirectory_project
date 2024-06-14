<?php

namespace web\directory\api\core\services;

use web\directory\api\core\domain\Entree;

class ServiceEntree implements ServiceEntreeInterface
{


    public function getAllEntrees(): array
    {
        return Entree::with('services')->get()->toArray();
    }

    public function getEntree(int $id): array
    {
        return Entree::find($id)->toArray();
    }
}