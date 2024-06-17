class Utilisateur {
  String? mail, mdp;
  int? role;

  Utilisateur({this.mail, this.mdp, this.role});

  factory Utilisateur.fromJson(Map<String, dynamic> json) {
    return switch (json) {
      {
        'mail': String? mail,
        'mdp': String? mdp,
        'role': int? role,
      } =>
        Utilisateur(mail: mail, mdp: mdp, role: role),
      _ => throw const FormatException('Failed to load utilisateur.'),
    };
  }
}
