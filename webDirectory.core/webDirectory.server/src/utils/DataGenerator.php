<?php

namespace web\directory\utils;

require_once __DIR__ . '/../vendor/autoload.php';

use Faker\Factory;
use web\directory\utils\ConnectionBD;
use web\directory\core\domain\Entree;
use web\directory\core\domain\Entree_Service;
use web\directory\core\domain\Service;
use web\directory\core\domain\Telephone;
use web\directory\core\domain\Utilisateur;


class DataGenerator
{
    private $faker;

    public function __construct()
    {
        $this->faker = Factory::create('fr_FR');
    }

    public function generatePersonData()
    {
        return [
            'nom' => $this->faker->lastName,
            'prenom' => $this->faker->firstName,
            'fonction' => $this->faker->jobTitle,
            'num_bureau' => $this->faker->numberBetween(100, 999),
            'email' => $this->faker->email,
            'url_image' => $this->faker->imageUrl(400, 400, 'people')
        ];
    }

    public function generateTelephoneData()
    {
        return [
            'numero' => $this->faker->numerify('##########')
        ];
    }

    public function generateUtilisateurData()
    {
        return [
            'mail' => $this->faker->email,
            'mdp' => password_hash('Bonjour88', PASSWORD_BCRYPT),
            'role' => 1
        ];
    }

    public function generateServiceData()
    {
        return [
            'libelle' => $this->faker->word
        ];
    }

    public function generateData()
    {
        echo "Création des données\n";
        for ($i = 0; $i < 5; $i++) {
            $serviceData = $this->generateServiceData();
            Service::create($serviceData);
        }

        echo "Services créés\n";

        for ($i = 0; $i < 5; $i++) {
            $personData = $this->generatePersonData();
            $personne = Entree::create($personData);

            $telephoneData = $this->generateTelephoneData();
            Telephone::create($telephoneData);

            for ($j = 0; $j < 3; $j++) {
                $id_departement = rand(1, 10);
                Entree_Service::create([
                    'id_personne' => $personne->id,
                    'id_departement' => $id_departement,
                ]);
            }
        }

        echo "Personnes créées\n";

        for ($i = 0; $i < 2; $i++) {
            $utilisateurData = $this->generateUtilisateurData();
            Utilisateur::create($utilisateurData);
        }

        echo "Utilisateurs créés\n";
    }
}

ConnectionBD::init(__DIR__ . '/../conf/webDirectory.db.conf.ini');

$generator = new DataGenerator();
$generator->generateData();
