<?php

namespace web\directory\core\services\Service;

interface ServiceServicesInterface
{

    public function getServices(): array;
    public function getEntreesOfService(int $id): array;

}