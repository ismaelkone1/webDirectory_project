<?php

namespace web\directory\api\core\services\services;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use web\directory\api\core\domain\Service;

class ServiceServices implements ServiceServicesInterface
{

    /**
     * @return array
     */
    public function getAllServices(): array
    {
        try {
            return Service::all()->toArray();
        } catch (ModelNotFoundException $e) {
            return ['error' => $e->getMessage()];
        }
    }

    /**
     * @param int $id
     * @return array
     */
    public function getEntreesDuService(int $id): array
    {
        try {
            $service = Service::with('entrees')->find($id);

            return $service->entrees()->with('services')
                ->where('is_published', true) // Add condition for published entries
                ->get()->toArray();
        } catch (ModelNotFoundException $e) {
            return ['error' => $e->getMessage()];
        }
    }

    public function getEntreesDuServiceEnFonctionDuNom(mixed $id, mixed $nom)
    {
        try {
            $service = Service::with('entrees')->find($id);

            return $service->entrees()->with('services')
                ->where('is_published', true) // Add condition for published entries
                ->where('nom', 'like', '%' . $nom . '%')
                ->get()->toArray();
        } catch (ModelNotFoundException $e) {
            return ['error' => $e->getMessage()];
        }
    }

    public function getEntreesDuServiceEnFonctionDuNomOrder(mixed $id, mixed $nom, array $sort)
    {
        try {
            $service = Service::with('entrees')->find($id);

            return $service->entrees()->with('services')
                ->where('is_published', true) // Add condition for published entries
                ->where('nom', 'like', '%' . $nom . '%')
                ->orderBy($sort[0], $sort[1])
                ->get()->toArray();
        } catch (ModelNotFoundException $e) {
            return ['error' => $e->getMessage()];
        }
    }

    public function getEntreesDuServiceOrder(mixed $id, array $sort)
    {
        try {
            $service = Service::with('entrees')->find($id);

            return $service->entrees()->with('services')
                ->where('is_published', true) // Add condition for published entries
                ->orderBy($sort[0], $sort[1])
                ->get()->toArray();
        } catch (ModelNotFoundException $e) {
            return ['error' => $e->getMessage()];
        }
    }
}
