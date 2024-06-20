<?php

namespace web\directory\api\core\domain;

use Illuminate\Database\Eloquent\Model as Eloquent;

class Utilisateur extends Eloquent
{
    protected $table = 'utilisateur';
    protected $primaryKey = 'id';
    public $timestamp = false;

    protected $fillable = ['mail', 'mdp', 'role'];

    public function entrees()
    {
        return $this->hasMany(Entree::class, 'created_by', 'id');
    }

}