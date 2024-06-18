<?php

namespace web\directory\api\core\services\entree;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use web\directory\api\core\domain\Entree;

class ServiceEntree implements ServiceEntreeInterface
{


    /**
     * @return array
     * Function to get all the entries
     */
    public function getAllEntrees(): array
    {
        //On gere les erreurs
        try {
            //On retourne toutes les entrees
            return Entree::with('services')->get()->toArray();
        } catch (ModelNotFoundException $e) {
            //On retourne une erreur
            return ['error' => $e->getMessage()];
        }
    }

    public function getAllEntreesOrderByNom($order) : array {
        try {
            return Entree::with('services')->orderBy('nom', $order)->get()->toArray();
        } catch (ModelNotFoundException $e) {
            return ['error' => $e->getMessage()];
        }
    }

    /**
     * @param int $id
     * @return array
     */
    public function getEntree(int $id): array
    {
        try {
            return Entree::find($id)->toArray();
        } catch (ModelNotFoundException $e) {
            return ['error' => $e->getMessage()];
        }
    }

    /**
     * @param string $nom
     * @return array
     */
    public function getEntreeEnFonctionDuNom(string $nom): array
    {
        try {
            return Entree::where('nom', 'like', '%' . $nom . '%')->with('services')->get()->toArray();
        } catch (ModelNotFoundException $e) {
            return ['error' => $e->getMessage()];
        }
    }
}