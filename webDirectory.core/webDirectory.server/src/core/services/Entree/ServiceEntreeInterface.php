<?php

namespace web\directory\core\services\Entree;

use web\directory\api\core\domain\Entree;

interface ServiceEntreeInterface
{

    public function getEntrees(): array;

    public function getEntreeById(int $id): array;

    public function getServices(): array;

    public function createEntree(array $data): bool;

    public function publierEntree(int $id) : bool;

    public function depublierEntree(int $id) : bool;

    public function getEntreesByUserId(string $userId) : array;


}
