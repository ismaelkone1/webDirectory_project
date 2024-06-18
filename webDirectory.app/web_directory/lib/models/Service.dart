class Service {
  int? id;
  String? libelle;
  Map<String, dynamic>? pivot;

  Service({this.id, this.libelle, this.pivot});

  factory Service.fromJson(Map<String, dynamic> json) {
    return Service(
      id: json['id'] as int?,
      libelle: json['libelle'] as String?,
      pivot: json['pivot'] as Map<String, dynamic>?,
    );
  }

  @override
  String toString() {
    return 'Service(id: $id, libelle: $libelle, pivot: $pivot)';
  }
}
