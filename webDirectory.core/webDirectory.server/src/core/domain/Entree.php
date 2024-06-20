<?php

namespace web\directory\core\domain;

use Illuminate\Database\Eloquent\Model as Eloquent;

class Entree extends Eloquent
{
    protected $table = 'entree';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = ['nom', 'prenom', 'fonction', 'num_bureau', 'email', 'url_image', 'is_published', 'created_by'];

    public function utilisateur()
    {
        return $this->belongsTo(Utilisateur::class, 'created_by');
    }

    public function telephones()
    {
        return $this->hasMany(Telephone::class, 'id_entree');
    }


    public function services()
    {
        return $this->belongsToMany(Service::class, 'entree_service', 'id_entree', 'id_service');
    }
}
