import 'package:flutter/material.dart';
import 'package:web_directory/models/ListeEntree.dart';
import 'package:web_directory/screens/entree_detail.dart';

class EntreePreview extends StatefulWidget {
  const EntreePreview({super.key, required this.listeEntree});

  final ListeEntree listeEntree;

  @override
  State<EntreePreview> createState() => _EntreePreviewState();
}

class _EntreePreviewState extends State<EntreePreview> {
  @override
  Widget build(BuildContext context) {
    return Card(
      color: const Color.fromARGB(255, 147, 206, 189),
      child: ListTile(
        title: Text(
            '${widget.listeEntree.nom ?? 'Pas de nom'} ${widget.listeEntree.prenom ?? ''}'),
        subtitle: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            for (var service in widget.listeEntree.services ?? [])
              Text(service.libelle!),
          ],
        ),
        trailing: const Icon(Icons.arrow_forward_ios),
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => EntreeDetail(url: widget.listeEntree.url!),
            ),
          );
        },
      ),
    );
  }
}
