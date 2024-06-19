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
  bool operator ==(Object other) {
    if (identical(this, other)) return true;
    if (other is! Service) return false;
    return id == other.id && libelle == other.libelle;
  }

  @override
  int get hashCode => id.hashCode ^ libelle.hashCode;

  @override
  String toString() {
    return 'Service(id: $id, libelle: $libelle, pivot: $pivot)';
  }
}
