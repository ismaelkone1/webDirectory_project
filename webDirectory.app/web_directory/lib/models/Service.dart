class Service {
  int? id;
  String? libelle;
  Map<String, dynamic>? pivot;

  Service({this.id, this.libelle, this.pivot});

  factory Service.fromJson(Map<String, dynamic> json) {
    return Service(
      id: json['id'],
      libelle: json['libelle'],
      pivot: json['pivot'],
    );
  }

  @override
  String toString() {
    return 'Service(id: $id, libelle: $libelle, pivot: $pivot)';
  }
}
