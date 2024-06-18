import 'package:flutter/material.dart';
import 'package:web_directory/models/Entree.dart';
import 'package:web_directory/screens/entree_preview.dart';

class EntreeMaster extends StatefulWidget {
  const EntreeMaster({super.key, required this.futureEntrees});

  final Future<List<Entree>> futureEntrees;

  @override
  _EntreeMasterState createState() => _EntreeMasterState();
}

class _EntreeMasterState extends State<EntreeMaster> {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: FutureBuilder<List<Entree>>(
        future: widget.futureEntrees,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const CircularProgressIndicator();
          } else if (snapshot.hasError) {
            return Text('Erreur: ${snapshot.error}');
          } else if (snapshot.hasData) {
            List<Entree>? entrees = snapshot.data;
            return EntreePreview(entrees: entrees);
          } else {
            return const Text('Aucune donnée reçue');
          }
        },
      ),
    );
  }
}
