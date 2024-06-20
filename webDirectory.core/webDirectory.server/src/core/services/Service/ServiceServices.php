<?php

namespace web\directory\core\services\Service;

use web\directory\core\domain\Service;
use web\directory\core\services\Service\ServiceServicesInterface;
use web\directory\core\services\exception\ServiceNotFoundException;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ServiceServices implements ServiceServicesInterface
{

    public function getServices(): array
    {
        try {
            $tabServices = Service::all();
        } catch (ModelNotFoundException $e) {
            throw new ServiceNotFoundException("Impossible de récupérer les services : " . $e);
        }
        return $tabServices->toArray();
    }

    public function getEntreesOfService(int $id): array
    {
        try {
            $service = Service::with('entrees')->find($id);
        } catch (ModelNotFoundException $e) {
            throw new ServiceNotFoundException("Impossible de récupérer les entrées du service " . $id . ": " . $e);
        }
        return $service->entrees()->with('services')->get()->toArray();
    }

    public function createService(array $data): bool
    {
        try {
            $service = new Service();
            $service->libelle = $data['libelle'];
            $service->etage = $data['etage'];
            $service->description = $data['description'];
            $service->created_by = $_SESSION['id'];
            $service->save();
        } catch (ModelNotFoundException $e) {
            throw new ServiceNotFoundException("Impossible de créer le service : " . $e);
        }
        return true;
    }
}