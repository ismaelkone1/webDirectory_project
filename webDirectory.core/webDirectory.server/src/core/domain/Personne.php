<?php

namespace web\directory\core\domain;

use Illuminate\Database\Eloquent\Model as Eloquent;
use web\directory\core\domain\Telephone;

class Utilisateur extends Eloquent
{
    protected $table = 'personne';
    protected $primaryKey = 'id';
    public $timestamp = false;

    public function telephones(){
        return $this->hasMany('web\directory\core\domain\Telephone', 'id_personne');
    }
    

    public function services(){
        return $this->belongsToMany(Service::class, 'personne_service', 'id_personne', 'id_service');
    }
}
