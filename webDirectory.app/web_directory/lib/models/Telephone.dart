class Telephone {
  int? idEntree;
  String? numero;

  Telephone({this.idEntree, this.numero});

  factory Telephone.fromJson(Map<String, dynamic> json) {
    return switch (json) {
      {
        'idEntree': int? idEntree,
        'numero': String? numero,
      } =>
        Telephone(idEntree: idEntree, numero: numero),
      _ => throw const FormatException('Failed to load telephone.'),
    };
  }
}
