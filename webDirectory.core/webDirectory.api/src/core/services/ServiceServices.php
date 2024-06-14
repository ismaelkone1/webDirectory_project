<?php

namespace web\directory\api\core\services;

use web\directory\api\core\domain\Service;

class ServiceServices implements ServiceServicesInterface
{

    public function getAllServices(): array
    {
        return Service::all()->toArray();
    }

    public function getEntreesDuService(int $id): array
    {
        $service = Service::with('entrees')->find($id);

        return $service->entrees()->with('services')->get()->toArray();
    }
}