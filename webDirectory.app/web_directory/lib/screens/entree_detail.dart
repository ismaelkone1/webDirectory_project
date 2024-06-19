import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:web_directory/models/Entree.dart';
import 'package:web_directory/providers/entree_provider.dart';

class EntreeDetail extends StatefulWidget {
  const EntreeDetail({super.key, required this.url});

  final String url;

  @override
  State<EntreeDetail> createState() => _EntreeDetailState();
}

class _EntreeDetailState extends State<EntreeDetail> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Détail de l\'entrée'),
      ),
      body: FutureBuilder<Entree?>(
        future: Provider.of<EntreeProvider>(context).getEntree(widget.url),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          } else if (snapshot.hasError) {
            return Center(child: Text('Erreur: ${snapshot.error}'));
          } else if (snapshot.hasData) {
            Entree entree = snapshot.data!;
            return Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Text('Détail de l\'entrée'),
                  Text('Nom: ${entree.nom}'),
                  Text('Prénom: ${entree.prenom}'),
                  Text('Fonction: ${entree.fonction}'),
                  Text('Email: ${entree.email}'),
                ],
              ),
            );
          } else {
            return const Center(child: Text('Aucune donnée disponible.'));
          }
        },
      ),
    );
  }
}
