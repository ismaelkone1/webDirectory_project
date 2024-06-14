<?php

namespace web\directory\app\actions;

use PSr\Http\Message\ResponseInterface as response;
use PSr\Http\Message\ServerRequestInterface as request;
use Ramsey\Collection\AbstractArray;

abstract class Action 
{
    public abstract function __invoke(Request $request, Response $response, array $args) : Response;
    
}