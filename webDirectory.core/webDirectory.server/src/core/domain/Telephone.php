<?php

namespace web\directory\core\domain;

use Illuminate\Database\Eloquent\Model as Eloquent;

class Telephone extends Eloquent
{
    protected $table = 'telephone';
    protected $primaryKey = 'id';
    public $timestamps = false;

    public function entree()
    {
        return $this->belongsTo(Entree::class);
    }
}
