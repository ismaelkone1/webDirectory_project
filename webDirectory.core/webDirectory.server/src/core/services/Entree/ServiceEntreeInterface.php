<?php

namespace web\directory\core\services\Entree;

interface ServiceEntreeInterface
{

    public function getEntrees(): array;

    public function getEntreeById(int $id): array;

    public function getServices() : array;
}