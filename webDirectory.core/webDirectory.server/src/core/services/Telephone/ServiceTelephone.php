<?php

namespace web\directory\core\services\Telephone;

use web\directory\core\services\exception\TelephoneNotFoundException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use web\directory\core\services\Telephone\ServiceTelephoneInterface;
use web\directory\core\domain\Telephone;

class ServiceTelephone implements ServiceTelephoneInterface
{

    public function getTelephone(): array
    {
        try {
            $tabTelephones = Telephone::all();
        } catch (ModelNotFoundException $e) {
            throw new TelephoneNotFoundException("Impossible de récupérer les téléphones : " . $e);
        }
        return $tabTelephones->toArray();
    }

    public function getTelephoneById(int $id): array
    {
        try {
            $tabTelephone = Telephone::find($id);
        } catch (ModelNotFoundException $e) {
            throw new TelephoneNotFoundException("Impossible de récupérer le téléphone " . $id . ": " . $e);
        }
        return $tabTelephone->toArray();
    }

    public function createTelephone(array $data): bool
    {
        try {
            $telephone = new Telephone();
            $telephone->id_entree = $data['entree_id'];
            $telephone->numero = '0' . $data['numTel'];
            $telephone->type =  $data['type'];
            $telephone->save();
            return true;
        } catch (\Exception $e) {
            return false;
        }
    }
}
