import 'package:web_directory/models/Service.dart';

class Entree {
  String? nom, prenom;
  List<Service>? services;
  String? url;

  Entree({
    this.nom,
    this.prenom,
    this.services,
    this.url,
  });

  factory Entree.fromJson(Map<String, dynamic> json) {
    var list = json['services'] as List?;
    List<Service> servicesList =
        list != null ? list.map((i) => Service.fromJson(i)).toList() : [];

    return Entree(
      nom: json['nom'] as String?,
      prenom: json['prenom'] as String?,
      services: servicesList,
      url: json['url'] as String?,
    );
  }

  @override
  String toString() {
    return 'Entree(nom: $nom, prenom: $prenom, services: $services, url: $url)';
  }
}
