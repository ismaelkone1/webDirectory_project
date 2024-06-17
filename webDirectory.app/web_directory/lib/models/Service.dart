class Service {
  String? libelle;

  Service({this.libelle});

  factory Service.fromJson(Map<String, dynamic> json) {
    return switch (json) {
      {
        'libelle': String libelle,
      } =>
        Service(libelle: libelle),
      _ => throw const FormatException('Failed to load service.'),
    };
  }
}
