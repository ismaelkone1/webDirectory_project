<?php

namespace web\directory\core\services\Entree_Service;

interface ServiceEntreeServiceInterface
{

    public function getEntreeService(): array;

    public function getEntreeServiceById(int $id): array;

    public function createEntreeService(array $data): bool;
}
