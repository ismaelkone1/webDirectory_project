<?php

namespace web\directory\api\core\services;

interface ServiceEntreeInterface
{

    public function getAllEntrees(): array;

    public function getEntree(int $id): array;

    public function getEntreeEnFonctionDuNom(string $nom): array;
}