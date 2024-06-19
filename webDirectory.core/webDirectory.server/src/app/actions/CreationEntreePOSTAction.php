<?php

namespace web\directory\app\actions;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Views\Twig;
use web\directory\app\utils\CsrfService;
use web\directory\core\services\Entree\ServiceEntree;
use Slim\Exception\HttpNotFoundException;

class CreationEntreePOSTAction extends Action
{
    public function __invoke(Request $rq, Response $rs, array $args): Response
    {

        $twig = Twig::fromRequest($rq);
        $data = $rq->getParsedBody();
        $nom = htmlspecialchars($data['nom'], ENT_QUOTES, 'UTF-8');
        $prenom = htmlspecialchars($data['prenom'], ENT_QUOTES, 'UTF-8');
        $fonction = htmlspecialchars($data['fonction'], ENT_QUOTES, 'UTF-8');
        $numBureau = filter_var($data['numBureau'], FILTER_SANITIZE_NUMBER_INT);
        $typeTel = $data['typeTel'];
        $numTel = htmlspecialchars($data['numTel'], ENT_QUOTES, 'UTF-8');
        $email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
        $service = filter_var($data['service'], FILTER_SANITIZE_NUMBER_INT);
        $csrf = htmlspecialchars($data['csrf'], ENT_QUOTES, 'UTF-8');

        $csrf = CsrfService::check($csrf);

        if (!$csrf) {
            return $rs->withStatus(403);
        }

        if ($this->validateEmail($email) === false) {
            return $rs->withStatus(400)->withHeader('Location', '/creationEntree');
        }

        $numBureau = intval($numBureau);
        $numTel = intval($numTel);

        $urlImage = null;

        $serviceEntree = new ServiceEntree();
        $data = [
            'nom' => $nom,
            'prenom' => $prenom,
            'fonction' => $fonction,
            'numBureau' => $numBureau,
            'email' => $email,
            'urlImage' => $urlImage,
            'service' => $service,
            'numTel' => $numTel,
            'type' => $typeTel
        ];

        if ($serviceEntree->createEntree($data)) {
            return $twig->render($rs, 'CreationEntreeSucess.twig');
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
