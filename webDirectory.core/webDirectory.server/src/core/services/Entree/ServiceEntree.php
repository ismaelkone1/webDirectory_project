<?php

namespace web\directory\core\services\Entree;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Ramsey\Uuid\Type\Integer;
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
                    mkdir($uploadDir, 0777, true);
                }
                if (move_uploaded_file($_FILES['urlImage']['tmp_name'], $uploadFile)) {
                    $entree->url_image = 'http://docketu.iutnc.univ-lorraine.fr:20003/api/image?name=' . $_FILES['urlImage']['name'];
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

    public function modifierEntree(int $entreeId, array $data): bool
    {
        try {
            // Récupérer l'entrée par son ID
            $entree = Entree::with('services')->find($entreeId);
            if (!$entree) {
                error_log('Entrée non trouvée');
                return false;
            }
            //On transforme le tableau de services en tableau d'entiers
            $data['services'] = array_map('intval', $data['services']);

            // Mettre à jour les champs de l'entrée
            $entree->nom = $data['nom'];
            $entree->prenom = $data['prenom'];
            $entree->services()->sync($data['services']);
            $entree->fonction = $data['fonction'];
            $entree->num_bureau = $data['num_bureau'];
            $entree->email = $data['email'];

            // Enregistrer les modifications
            $entree->save();

            return true;
        } catch (\Exception $e) {
            var_dump($e->getMessage());
            // Gérer les erreurs
            error_log("Erreur lors de la modification de l'entrée : " . $e->getMessage());
            return false;
        }
    }

    public function supprimerEntree(int $entreeId): bool
    {
        try {
            // Récupérer l'entrée par son ID
            $entree = Entree::find($entreeId);

            if (!$entree) {
                error_log('Entrée non trouvée');
                return false;
            }

            // Supprimer l'entrée
            $entree->delete();
            error_log('Suppression de l\'entrée réussie');

            return true;
        } catch (\Exception $e) {
            // Gérer les erreurs
            error_log("Erreur lors de la suppression de l'entrée : " . $e->getMessage());
            return false;
        }
    }
}
