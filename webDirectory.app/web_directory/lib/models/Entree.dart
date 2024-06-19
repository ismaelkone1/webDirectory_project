class Entree {
  int id, numBureau;
  String nom, prenom, fonction, email, urlImage;

  Entree({
    required this.id,
    required this.nom,
    required this.prenom,
    required this.fonction,
    required this.numBureau,
    required this.email,
    required this.urlImage,
  });

  factory Entree.fromJson(Map<String, dynamic> json) {
    return Entree(
      id: json['id'],
      nom: json['nom'],
      prenom: json['prenom'],
      fonction: json['fonction'],
      numBureau: json['num_bureau'],
      email: json['email'],
      urlImage: json['url_image'],
    );
  }

  @override
  String toString() {
    return 'Entree(id: $id, nom: $nom, prenom: $prenom, fonction: $fonction, numBureau: $numBureau, email: $email, urlImage: $urlImage)';
  }
}
