<?php

namespace web\directory\api\core\services;

interface ServiceServicesInterface
{

    public function getAllServices(): array;
    public function getEntreesDuService(int $id): array;

}