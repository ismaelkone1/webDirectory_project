<?php 

namespace web\directory\core\services\authentification;

use web\directory\core\domain\Utilisateur;
use web\directory\core\services\exception\InvalidArgumentException;
use web\directory\core\services\authentification\AuthServiceInterface;
use Ramsey\Uuid\Uuid;

class AuthService implements AuthServiceInterface
{
    public function isSuperAdmin($id): bool
    {
        $user = Utilisateur::find($id);
        return $user->role == '1';
    }

    public function saveUser(Utilisateur $user)
    {
        $user->save();
    }

    public function checkPasswordStrength(string $pass): bool 
    {
        $digit = preg_match("#[\d]#", $pass);
        $special = preg_match("#[\W]#", $pass);
        $lower = preg_match("#[a-z]#", $pass);
        $upper = preg_match("#[A-Z]#", $pass);

        return $digit && $special && $lower && $upper;
    }

    public function checkUsernameDB(string $user_id): bool 
    {
        $user = Utilisateur::where('mail', $user_id)->first();
        return $user === null;
    }


    /**
     * @throws InvalidArgumentException
     */
    public function createUser(array $args): Utilisateur
    {
        if (strlen($args['mdp']) < 8) {
            throw new InvalidArgumentException('Le mot de passe doit contenir au moins 8 caractères');
        }

        if (!$this->checkPasswordStrength($args['mdp'])) {
            throw new InvalidArgumentException('Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial');
        }

        if (!$this->checkUsernameDB($args['mail'])) {
            throw new InvalidArgumentException("L'email est déjà utilisé.");
        }

        $args['activation_token'] = bin2hex(random_bytes(64));

        $hash = password_hash($args['mdp'], PASSWORD_DEFAULT);

        $user = new Utilisateur();
        $user->id = Uuid::uuid4()->toString();
        $user->mail = $args['mail'];
        $user->mdp = $hash;
        $user->activation_token = $args['activation_token'];
        $user->role = 2;

        $this->saveUser($user);
        return $user;
    }

    public function checkPasswordValid(string $pass, string $user_id): bool
    {
        $user = Utilisateur::where('mail', $user_id)->first();
    
        if (!$user) {
            return false; // Utilisateur non trouvé
        }
    
        return password_verify($pass, $user->mdp);
    }
    

    public function connectUser(array $args): Utilisateur
    {
        $user = Utilisateur::find($args['id']);
        if ($user) {
            $_SESSION['id'] = $user->id;
            if ($user->role == 1) {
                $user->role = 1;
            } else {
                $user->role = 2;
            }
        }
        return $user;
    }
}