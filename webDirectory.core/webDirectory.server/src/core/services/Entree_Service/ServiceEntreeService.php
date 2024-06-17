<?php

namespace web\directory\core\services\Entree_Service;

use web\directory\core\domain\Entree_Service;
use web\directory\core\services\Entree_Service\ServiceEntreeServiceInterface;
use web\directory\core\services\exception\EntreeServiceNotFoundException;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ServiceEntreeService implements ServiceEntreeServiceInterface
{

    public function getEntreeService(): array
    {
        try {
            $tabEntrees = Entree_Service::all();
        } catch (ModelNotFoundException $e) {
            throw new EntreeServiceNotFoundException("Impossible de récupérer les entrées : " . $e);
        }
        return $tabEntrees->toArray();
    }

    public function getEntreeServiceById(int $id): array
    {
        try {
            $tabEntree = Entree_Service::find($id);
        } catch (ModelNotFoundException $e) {
            throw new EntreeServiceNotFoundException("Impossible de récupérer l'entrée " . $id . ": " . $e);
        }
        return $tabEntree->toArray();
    }

    public function createEntreeService(array $data): bool
    {
        try {
            $entreeService = new Entree_Service();
            $entreeService->id_entree = $data['entree_id'];
            $entreeService->id_service = $data['service_id'];
            $entreeService->save();
            return true;
        } catch (\Exception $e) {
            return false;
        }
    }
}
