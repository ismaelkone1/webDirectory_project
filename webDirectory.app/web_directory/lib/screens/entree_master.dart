import 'package:flutter/material.dart';
import 'package:web_directory/models/ListeEntree.dart';
import 'package:web_directory/providers/liste_entree_provider.dart';
import 'package:web_directory/screens/entree_preview.dart';
import 'package:provider/provider.dart';

class EntreeMaster extends StatefulWidget {
  const EntreeMaster({super.key});

  @override
  State<EntreeMaster> createState() => _EntreeMasterState();
}

class _EntreeMasterState extends State<EntreeMaster> {
  _EntreeMasterState();

  @override
  Widget build(BuildContext context) {
    return Consumer<ListeEntreeProvider>(
      builder: (context, entreeProvider, child) {
        if (entreeProvider.isSearching) {
          return const Center(child: CircularProgressIndicator());
        }
        return FutureBuilder<List<ListeEntree>>(
          future: entreeProvider.getEntreeAlphabetiqueASC(),
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.waiting) {
              return const Center(child: CircularProgressIndicator());
            } else if (snapshot.hasError) {
              return Center(child: Text('Error: ${snapshot.error}'));
            } else if (!snapshot.hasData ||
                snapshot.data!.isEmpty ||
                entreeProvider.noResultsFound) {
              return const Center(
                  child: Text(
                'Pas d\'entrées à afficher',
                style: TextStyle(fontSize: 24),
                textAlign: TextAlign.center,
              ));
            } else {
              return ListView.builder(
                  itemCount: entreeProvider.entrees.length,
                  itemBuilder: (context, index) {
                    ListeEntree listeEntree = entreeProvider.entrees[index];
                    return EntreePreview(listeEntree: listeEntree);
                  });
            }
          },
        );
      },
    );
  }
}
