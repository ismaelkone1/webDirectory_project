<?php 

namespace web\directory\core\services\authentification;

use web\directory\api\core\domain\Utilisateur;
use web\directory\core\services\exception\InvalidArgumentException;
use web\directory\core\services\authentification\AuthServiceInterface;
use Ramsey\Uuid\Uuid;

class AuthService implements AuthServiceInterface
{
    public function isAdmin($id): bool
    {
        $user = Utilisateur::find($id);
        return $user->role == '2'; // L Utilisateur est par defaut un admin
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
        if (strlen($args['password']) < 10) {
            throw new InvalidArgumentException('Le mot de passe doit contenir au moins 10 caractères');
        }

        if (!$this->checkPasswordStrength($args['password'])) {
            throw new InvalidArgumentException('Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial');
        }

        if (!$this->checkUsernameDB($args['user_id'])) {
            throw new InvalidArgumentException("L'email est déjà utilisé.");
        }

        $args['activation_token'] = bin2hex(random_bytes(64));

        $hash = password_hash($args['password'], PASSWORD_DEFAULT);

        $user = new Utilisateur();
        $user->id = Uuid::uuid4()->toString();
        $user->user_id = $args['user_id'];
        $user->password = $hash;
        $user->activation_token = $args['activation_token'];
        $user->role = 2;

        $this->saveUser($user);
        return $user;
    }

    public function checkPasswordValid(string $pass, string $user_id): bool
    {
        $user = Utilisateur::where('user_id', $user_id)->first();
        return password_verify($pass, $user->password);
    }

    public function connectUser(array $args): Utilisateur
    {
        $user = Utilisateur::find($args['id']);
        if ($user) {
            $_SESSION['id'] = $user->id;
            if ($user->role == 1) {
                $user->role = 1; // Super Admin
            } else {
                $user->role = 2;
            }
        }
        return $user;
    }
}
