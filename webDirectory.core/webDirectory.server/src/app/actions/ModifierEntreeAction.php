<?php

namespace web\directory\app\actions;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Views\Twig;
use web\directory\app\utils\CsrfService;
use web\directory\core\services\Entree\ServiceEntree;
use Slim\Exception\HttpNotFoundException;

class ModifierEntreeAction extends Action
{
    public function __invoke(Request $rq, Response $rs, array $args): Response
    {
        $twig = Twig::fromRequest($rq);
        $data = $rq->getParsedBody();
        $id = (int) $args['id'];
        
        // Initialisation des valeurs par défaut pour éviter les erreurs "Undefined array key"
        $nom = $data['nom'] ?? '';
        $prenom = $data['prenom'] ?? '';
        $fonction = $data['fonction'] ?? '';
        $numBureau = $data['numBureau'] ?? '';
        $typeTel = $data['typeTel'] ?? '';
        $numTel = $data['numTel'] ?? '';
        $email = $data['email'] ?? '';
        $service = $data['service'] ?? '';
        $csrf = $data['csrf'] ?? '';

        // Validation CSRF
        $csrf = CsrfService::check($csrf);

        if (!$csrf) {
            return $rs->withStatus(403);
        }

        // Validation Email
        if ($this->validateEmail($email) === false) {
            return $rs->withStatus(400)->withHeader('Location', '/modifierEntree/' . $id);
        }

        $numBureau = intval($numBureau);
        $numTel = intval($numTel);

        $urlImage = null;

        // Gestion de l'upload d'image (si nécessaire)
        if (isset($_FILES['urlImage']) && $_FILES['urlImage']['error'] === UPLOAD_ERR_OK) {
            $fileTmpPath = $_FILES['urlImage']['tmp_name'];
            $fileName = $_FILES['urlImage']['name'];
            $fileSize = $_FILES['urlImage']['size'];
            $fileType = $_FILES['urlImage']['type'];
            $fileNameCmps = explode(".", $fileName);
            $fileExtension = strtolower(end($fileNameCmps));
            $newFileName = md5(time() . $fileName) . '.' . $fileExtension;

            $allowedfileExtensions = array('jpg', 'gif', 'png', 'jpeg');
            if (in_array($fileExtension, $allowedfileExtensions)) {
                $uploadFileDir = './uploads/';
                $dest_path = $uploadFileDir . $newFileName;
                if (move_uploaded_file($fileTmpPath, $dest_path)) {
                    $urlImage = $dest_path;
                }
            }
        }

        $serviceEntree = new ServiceEntree();
        
        // Vérification si l'entrée appartient à l'utilisateur
        $entree = $serviceEntree->getEntreeById($id);
        if ($entree['created_by'] !== $_SESSION['id']) {
            return $twig->render($rs, 'Erreur.twig', ['message' => 'Vous n\'êtes pas autorisé à modifier cette entrée.']);
        }

        $data = [
            'nom' => $nom,
            'prenom' => $prenom,
            'fonction' => $fonction,
            'numBureau' => $numBureau,
            'email' => $email,
            'urlImage' => $urlImage,
            'service' => $service,
            'numTel' => $numTel,
            'type' => $typeTel,
            'created_by' => $_SESSION['id']
        ];

        if ($serviceEntree->modifierEntree($id, $data)) {
            return $twig->render($rs, 'PublicationSuccess.twig');
        }

        return $rs->withStatus(500);
    }

    private function validateEmail($email): bool
    {
        if (filter_var($email, FILTER_VALIDATE_EMAIL) && preg_match('/@/', $email) && preg_match('/\./', $email)) {
            return true;
        }
        return false;
    }
}
