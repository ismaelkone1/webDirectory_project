class EntreeService {
  int idEntree;
  int idService;

  EntreeService({required this.idEntree, required this.idService});

  factory EntreeService.fromJson(Map<String, dynamic> json) {
    return switch (json) {
      {
        'idEntree': int idEntree,
        'idService': int idService,
      } =>
        EntreeService(idEntree: idEntree, idService: idService),
      _ => throw const FormatException('Failed to load entreeService.'),
    };
  }
}
