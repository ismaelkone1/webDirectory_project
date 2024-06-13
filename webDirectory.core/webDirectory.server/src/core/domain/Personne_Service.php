<?php

namespace web\directory\core\domain;

use Illuminate\Database\Eloquent\Model as Eloquent;

class Utilisateur extends Eloquent
{
    protected $table = 'personne_service';
    public $timestamp = false;
    protected $keyType = 'int';
    protected $fillable = ['id_personne', 'id_service'];

}
