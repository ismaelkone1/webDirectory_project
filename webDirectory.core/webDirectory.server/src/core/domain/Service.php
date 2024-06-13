<?php

namespace web\directory\core\domain;

use Illuminate\Database\Eloquent\Model as Eloquent;

class Service extends Eloquent
{
    protected $table = 'service';
    protected $primaryKey = 'id';
    public $timestamp = false;

    public function personnes(){
        return $this->belongsToMany('web\directory\core\domain\Personne', 'personne_service', 'id_service', 'id_personne');
    }
}
