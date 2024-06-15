<?php

namespace web\directory\core\services\Entree;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use web\directory\core\domain\Entree;
use web\directory\core\services\exception\EntreeNotFoundException;

class ServiceEntree implements ServiceEntreeInterface
{


    public function getEntrees(): array
    {
        try {
            $tabEntrees = Entree::all();
        } catch (ModelNotFoundException $e) {
            throw new EntreeNotFoundException("Impossible de récupérer les entrées : " . $e);
        }
        return $tabEntrees->toArray();
    }

    public function getEntreeById(int $id): array
    {
        try {
            $tabEntree = Entree::find($id);
        } catch (ModelNotFoundException $e) {
            throw new EntreeNotFoundException("Impossible de récupérer l'entrée " . $id . ": " . $e);
        }
        return $tabEntree->toArray();
    }

    public function getServices() : array {
        try {
            $tabServicesEntrees = Entree::with('services')->get();
        } catch (ModelNotFoundException $e) {
            throw new EntreeNotFoundException("Impossible de récupérer les services : " . $e);
        }
        return $tabServicesEntrees->toArray();
    }
}