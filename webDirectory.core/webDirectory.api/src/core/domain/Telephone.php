<?php

namespace web\directory\api\core\domain;

use Illuminate\Database\Eloquent\Model as Eloquent;

class Telephone extends Eloquent
{
    protected $table = 'telephone';
    protected $primaryKey = 'id';
    public $timestamp = false;

    public function entree(){
        return $this->belongsTo(Entree::class);
    }
}
