<?php

namespace web\directory\core\domain;

use Illuminate\Database\Eloquent\Model as Eloquent;

class Utilisateur extends Eloquent
{
    protected $table = 'telephone';
    protected $primaryKey = 'id';
    public $timestamp = false;

    public function personne(){
        return $this->belongsTo('web\directory\core\domain\Personne');
    }
}
