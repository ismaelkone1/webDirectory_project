import 'package:web_directory/models/Service.dart';
import 'package:web_directory/models/Telephone.dart';

class Entree {
  int id, numBureau;
  String nom, prenom, fonction, email, urlImage;
  List<Service> services;
  List<Telephone> telephones;

  Entree({
    required this.id,
    required this.nom,
    required this.prenom,
    required this.fonction,
    required this.numBureau,
    required this.email,
    required this.urlImage,
    required this.services,
    required this.telephones,
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
      services: (json['services'] as List)
          .map((service) => Service.fromJson(service))
          .toList(),
      telephones: (json['telephones'] as List)
          .map((telephone) => Telephone.fromJson(telephone))
          .toList(),
    );
  }

  @override
  String toString() {
    return 'Entree(id: $id, nom: $nom, prenom: $prenom, fonction: $fonction, numBureau: $numBureau, email: $email, urlImage: $urlImage, services: $services, telephones: $telephones)';
  }
}
