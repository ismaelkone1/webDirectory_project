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
}