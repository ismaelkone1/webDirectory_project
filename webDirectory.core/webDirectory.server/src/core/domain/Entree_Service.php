<?php

namespace web\directory\core\domain;

use Illuminate\Database\Eloquent\Model as Eloquent;

class Entree_Service extends Eloquent
{
    protected $table = 'entree_service';
    public $timestamp = false;
    protected $keyType = 'int';
    protected $fillable = ['id_entree', 'id_service'];

}
