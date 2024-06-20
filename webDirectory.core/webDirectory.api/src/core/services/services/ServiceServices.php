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

    /**
     * @param int $id
     * @param string $sort
     * @return array
     */
    public function getEntreesDuServiceSort(int $id, string $sort): array
    {
        try {
            if ($sort == 'nom-asc') {
                $service = Service::with('entrees')->find($id)->entrees()->orderBy('nom', 'asc')->get();
            } else if ($sort == 'nom-desc') {
                $service = Service::with('entrees')->find($id)->entrees()->orderBy('nom', 'desc')->get();
            }

            return $service->entrees()->with('services')->get()->toArray();
        } catch (ModelNotFoundException $e) {
            return ['error' => $e->getMessage()];
        }
    }
}
