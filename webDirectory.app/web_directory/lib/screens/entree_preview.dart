import 'package:flutter/material.dart';
import 'package:web_directory/models/Entree.dart';

class EntreePreview extends StatefulWidget {
  const EntreePreview({super.key, required this.entree});

  final Entree entree;

  @override
  State<EntreePreview> createState() => _EntreePreviewState();
}

class _EntreePreviewState extends State<EntreePreview> {
  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListTile(
        title: Text(
            '${widget.entree.nom ?? 'Pas de nom'} ${widget.entree.prenom ?? ''}'),
        subtitle: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            for (var service in widget.entree.services ?? [])
              Text(service.libelle!),
          ],
        ),
      ),
    );
  }
}
