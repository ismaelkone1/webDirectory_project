class Entree {
  String? nom, prenom, fonction, email, urlImage;
  int? numBureau;

  Entree(
      {this.nom,
      this.prenom,
      this.fonction,
      this.email,
      this.urlImage,
      this.numBureau});

  factory Entree.fromJson(Map<String, dynamic> json) {
    return switch (json) {
      {
        'nom': String nom,
        'prenom': String prenom,
        'fonction': String fonction,
        'email': String email,
        'urlImage': String urlImage,
        'numBureau': int numBureau,
      } =>
        Entree(
            nom: nom,
            prenom: prenom,
            fonction: fonction,
            email: email,
            urlImage: urlImage,
            numBureau: numBureau),
      _ => throw const FormatException('Failed to load entree.'),
    };
  }
}
