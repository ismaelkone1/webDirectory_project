<?php

namespace web\directory\core\domain;

use Illuminate\Database\Eloquent\Model as Eloquent;

class Utilisateur extends Eloquent
{
    protected $table = 'utilisateur';
    protected $primaryKey = 'id';
    public $timestamp = false;
    public $keyType = 'string';


    protected $fillable = ['mail', 'mdp', 'role'];

    public function entrees()
    {
        return $this->hasMany(Entree::class, 'created_by', 'id');
    }

}
