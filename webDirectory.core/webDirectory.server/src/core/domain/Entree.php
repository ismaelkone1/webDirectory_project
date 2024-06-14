<?php

namespace web\directory\core\domain;

use Illuminate\Database\Eloquent\Model as Eloquent;

class Entree extends Eloquent
{
    protected $table = 'entree';
    protected $primaryKey = 'id';
    public $timestamp = false;

    public function telephones(){
        return $this->hasMany(Telephone::class, 'id_entree');
    }
    

    public function services(){
        return $this->belongsToMany(Service::class, 'entree_service', 'id_entree', 'id_service');
    }
}
