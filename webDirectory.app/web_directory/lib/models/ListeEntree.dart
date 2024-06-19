import 'package:web_directory/models/Service.dart';

class ListeEntree {
  String? nom, prenom;
  List<Service>? services;
  String? url;

  ListeEntree({
    this.nom,
    this.prenom,
    this.services,
    this.url,
  });

  factory ListeEntree.fromJson(Map<String, dynamic> json) {
    var list = json['services'] as List?;
    List<Service> servicesList =
        list != null ? list.map((i) => Service.fromJson(i)).toList() : [];

    return ListeEntree(
      nom: json['nom'],
      prenom: json['prenom'],
      services: servicesList,
      url: json['url'],
    );
  }

  @override
  String toString() {
    return 'Entree(nom: $nom, prenom: $prenom, services: $services, url: $url)';
  }
}
