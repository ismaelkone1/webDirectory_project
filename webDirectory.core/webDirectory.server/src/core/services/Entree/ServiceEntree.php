<?php

namespace web\directory\core\services\Entree;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use web\directory\api\core\services\entree\ServiceEntree as EntreeServiceEntree;
use web\directory\core\domain\Entree;
use web\directory\core\services\exception\EntreeNotFoundException;
use web\directory\core\services\Entree\ServiceEntreeInterface;
use web\directory\core\services\Entree_Service\ServiceEntreeService;
use web\directory\core\services\Telephone\ServiceTelephone;


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

    public function getServices(): array
    {
        try {
            $tabServicesEntrees = Entree::with('services')->get();
        } catch (ModelNotFoundException $e) {
            throw new EntreeNotFoundException("Impossible de récupérer les services : " . $e);
        }
        return $tabServicesEntrees->toArray();
    }

    public function getEntreeByService(String $service): array
    {
        try {
            $tabEntrees = Entree::with('services')->whereHas('services', function($query) use ($service) {
                $query->where('libelle', '=', $service);
            })->get();
        } catch (ModelNotFoundException $e) {
            throw new EntreeNotFoundException("Impossible de récupérer les entrées du service " . $service . ": " . $e);
        }
        return $tabEntrees->toArray();
    }

    public function createEntree(array $data): bool
    {
        try {
            $entree = new Entree();
            $entree->nom = $data['nom'];
            $entree->prenom = $data['prenom'];
            $entree->fonction = $data['fonction'];
            $entree->num_bureau = $data['numBureau'];
            $entree->email = $data['email'];

            if (isset($_FILES['urlImage']) && $_FILES['urlImage']['error'] === UPLOAD_ERR_OK) {
                $uploadDir = 'uploadImages/';
                $uploadFile = $uploadDir . basename($_FILES['urlImage']['name']);
                if (!file_exists($uploadDir)) {
                    mkdir($uploadDir, 0777, true);
                }
                if (move_uploaded_file($_FILES['urlImage']['tmp_name'], $uploadFile)) {
                    $entree->url_image = $uploadFile;
                } else {
                    throw new \Exception("Échec du téléchargement de l'image");
                }
            } else {
                $entree->url_image = null;
            }

            if ($entree->save()) {
                $serviceEntreeService = new ServiceEntreeService();

                $dataService = [
                    'entree_id' => $entree->id,
                    'service_id' => $data['service']
                ];

                if ($serviceEntreeService->createEntreeService($dataService)) {
                    $serviceTelephone = new ServiceTelephone();

                    $dataTelephone = [
                        'entree_id' => $entree->id,
                        'numTel' => $data['numTel']
                    ];

                    if ($serviceTelephone->createTelephone($dataTelephone)) {
                        return true;
                    }
                }
            }
        } catch (ModelNotFoundException $e) {
            throw new EntreeNotFoundException("Impossible de créer l'entrée : " . $e);
        }
        return false;
    }

    public function publierEntree(int $id) : Entree
    {
        try {
            $entree = Entree::find($id);
        } catch (\Exception $e) {
            throw new EntreeNotFoundException("Impossible de publier l'entrée : " . $e);
        }

        $entree->is_published = true;
        $entree->save();

        return $entree;
    }
    
    public function depublierEntree(int $id) : Entree
    {
        try {
            $entree = Entree::find($id);
        } catch (\Exception $e) {
            throw new EntreeNotFoundException("Impossible de publier l'entrée : " . $e);
        }

        $entree->is_published = false;
        $entree->save();

        return $entree;
    }

    public function getEntreePublier()
    {
        try {
            return Entree::where('is_published', true)->get();
        } catch (\Exception $e) {
            throw new EntreeNotFoundException("Impossible de dépublier l'entrée : " . $e);
        }
    }

}
