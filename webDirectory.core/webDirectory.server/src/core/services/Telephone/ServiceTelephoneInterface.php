<?php

namespace web\directory\core\services\Telephone;

interface ServiceTelephoneInterface
{

    public function getTelephone(): array;

    public function getTelephoneById(int $id): array;

    public function createTelephone(array $data): bool;
}
