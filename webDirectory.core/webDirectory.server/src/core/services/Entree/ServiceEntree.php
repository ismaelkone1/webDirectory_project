<?php

namespace web\directory\core\services\Entree;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use web\directory\core\domain\Utilisateur;
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
            $tabEntrees = Entree::with('services')->with('telephones')->get();
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

    public function getTelephones(): array 
    {
        try {
            $tabTelephones = Entree::with('telephones')->get();
        } catch (ModelNotFoundException $e) {
            throw new EntreeNotFoundException("Impossible de récupérer les téléphones : " . $e);
        }
        return $tabTelephones->toArray();
    }

    public function getEntreesByService(string $service): array
    {
        try {
            $tabEntrees = Entree::with('telephones')->with('services')->whereHas('services', function ($query) use ($service) {
                $query->where('libelle', '=', $service);
            })->get();
        } catch (ModelNotFoundException $e) {
            throw new EntreeNotFoundException("Impossible de récupérer les entrées du service " . $service . ": " . $e);
        }
        return $tabEntrees->toArray();
    }

    public function getEntreesByNom(string $nom): array
    {
        try {
            $tabEntrees = Entree::with('telephones')->with('services')->where('nom', 'like', '%' . $nom . '%')->get();
        } catch (ModelNotFoundException $e) {
            throw new EntreeNotFoundException("Impossible de récupérer les entrées du nom " . $nom . ": " . $e);
        }
        return $tabEntrees->toArray();
    }

    public function getEntreesByNomAndService(string $nom, string $service): array
    {
        try {
            $tabEntrees = Entree::with('telephones')->with('services')->where('nom', 'like', '%' . $nom . '%')->whereHas('services', function ($query) use ($service) {
                $query->where('libelle', '=', $service);
            })->get();
        } catch (ModelNotFoundException $e) {
            throw new EntreeNotFoundException("Impossible de récupérer les entrées du nom " . $nom . " et du service " . $service . ": " . $e);
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
            $entree->created_by = $data['created_by'];

            if (isset($_FILES['urlImage']) && $_FILES['urlImage']['error'] === UPLOAD_ERR_OK) {
                $uploadDir = 'uploadImages/';
                $uploadFile = $uploadDir . basename($_FILES['urlImage']['name']);
                if (!file_exists($uploadDir)) {
                    mkdir($uploadDir, 0755, true);
                }
                if (move_uploaded_file($_FILES['urlImage']['tmp_name'], $uploadFile)) {
                    $entree->url_image = 'http://docketu.iutnc.univ-lorraine.fr:20003/api/image?name=' . $_FILES['urlImage']['name'];
                } else {
                    throw new EntreeNotFoundException("Impossible de déplacer le fichier");
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
                        'numTel' => $data['numTel'],
                        'type' => $data['type']
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

    public function publierEntree(int $id): bool
    {
        try {
            $entree = Entree::find($id);
        } catch (\Exception $e) {
            throw new EntreeNotFoundException("Impossible de publier l'entrée : " . $e);
        }

        $entree->is_published = true;
        $entree->save();

        return $entree->save();
    }
    
    public function depublierEntree(int $id): bool
    {
        try {
            $entree = Entree::find($id);
        } catch (\Exception $e) {
            throw new EntreeNotFoundException("Impossible de publier l'entrée : " . $e);
        }

        $entree->is_published = false;

        return $entree->save();
    }

    public function getEntreePublier(): array
    {
        try {
            $entreePublie = Entree::where('is_published', true)->get();
        } catch (\Exception $e) {
            throw new EntreeNotFoundException("Impossible de dépublier l'entrée : " . $e);
        }
        return $entreePublie;
    }

    public function getEntreesByUserId(string $userId): array
    {
        try {
            $entreeUser = Entree::where('created_by', $userId)->get();

            if (!$entreeUser) {
                throw new EntreeNotFoundException("Utilisateur non trouvé");
            }

            return $entreeUser->toArray();
        } catch (\Exception $e) {
            throw new EntreeNotFoundException("Erreur lors de la récupération des entrées de l'utilisateur : " . $e->getMessage());
        }
    }

    public function modifierEntree(int $id, array $data): bool
    {
        try {
            $entree = Entree::find($id);
            if (!$entree) {
                throw new EntreeNotFoundException("Entrée non trouvée pour l'ID : $id");
            }

            // Mettez à jour les champs nécessaires
            $entree->nom = $data['nom'] ?? $entree->nom;
            $entree->prenom = $data['prenom'] ?? $entree->prenom;
            $entree->fonction = $data['fonction'] ?? $entree->fonction;
            $entree->num_bureau = $data['numBureau'] ?? $entree->num_bureau;
            $entree->email = $data['email'] ?? $entree->email;
            $entree->url_image = $data['urlImage'] ?? $entree->url_image;

            return $entree->save();
        } catch (\Exception $e) {
            return false;
        }
    }
}
