class Telephone {
  int? id, idEntree;
  String? numero;

  Telephone({this.id, this.idEntree, this.numero});

  factory Telephone.fromJson(Map<String, dynamic> json) {
    return Telephone(
      id: json['id'],
      idEntree: json['id_entree'],
      numero: json['numero'],
    );
  }

  @override
  String toString() =>
      'Telephone(id: $id, idEntree: $idEntree, numero: $numero)';
}
