import 'package:flutter/material.dart';
import 'package:web_directory/models/Entree.dart';

class EntreePreview extends StatelessWidget {
  const EntreePreview({super.key, required this.entrees});

  final List<Entree>? entrees;

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: entrees?.length ?? 0,
      itemBuilder: (context, index) {
        Entree entree = entrees![index];
        return Card(
          child: ListTile(
            title: Text('${entree.nom ?? 'Pas de nom'} ${entree.prenom ?? ''}'),
            subtitle: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                for (var service in entree.services ?? [])
                  Text(service.libelle!),
              ],
            ),
          ),
        );
      },
    );
  }
}
