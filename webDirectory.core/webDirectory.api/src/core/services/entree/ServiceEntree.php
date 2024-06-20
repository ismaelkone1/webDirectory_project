<?php

namespace web\directory\api\core\services\entree;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use web\directory\api\core\domain\Entree;

class ServiceEntree implements ServiceEntreeInterface
{
    /**
     * recuperer toutes les entrees publiees
     *
     * @return array
     */
    public function getAllEntrees(): array
    {
        try {
            return Entree::with('services')
                ->where('is_published', true)
                ->get()
                ->toArray();
        } catch (ModelNotFoundException $e) {
            return ['error' => $e->getMessage()];
        }
    }

    /**
     * Get all entries and order them by specified column and direction
     *
     * @param array $sort ['column', 'direction']
     * @return array
     */
    public function getAllEntreesOrder(array $sort): array
    {
        try {
            return Entree::with('services')
                ->orderBy($sort[0], $sort[1])
                ->where('is_published', true) // Add condition for published entries
                ->get()
                ->toArray();
        } catch (ModelNotFoundException $e) {
            return ['error' => $e->getMessage()];
        }
    }

    /**
     * Get an entry by its ID
     *
     * @param int $id
     * @return array
     */
    public function getEntree(int $id): array
    {
        try {
            return Entree::with(['services', 'telephones'])
                ->where('is_published', true) // Add condition for published entry
                ->findOrFail($id)
                ->toArray();
        } catch (ModelNotFoundException $e) {
            return ['error' => $e->getMessage()];
        }
    }

    /**
     * Get entries based on the name
     *
     * @param string $nom
     * @return array
     */
    public function getEntreeEnFonctionDuNom(string $nom): array
    {
        try {
            return Entree::where('nom', 'like', '%' . $nom . '%')
                ->where('is_published', true) // Add condition for published entries
                ->with('services')
                ->get()
                ->toArray();
        } catch (ModelNotFoundException $e) {
            return ['error' => $e->getMessage()];
        }
    }
}
