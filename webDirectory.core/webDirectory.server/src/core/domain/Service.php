<?php

namespace web\directory\core\domain;

use Illuminate\Database\Eloquent\Model as Eloquent;

class Service extends Eloquent
{
    protected $table = 'service';
    protected $primaryKey = 'id';
    public $timestamp = false;

    public function entrees()
    {
        return $this->belongsToMany(Entree::class, 'entree_service', 'id_service', 'id_entree');
    }
}
