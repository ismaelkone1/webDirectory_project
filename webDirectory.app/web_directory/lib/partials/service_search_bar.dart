import 'package:flutter/material.dart';
import 'package:web_directory/providers/liste_entree_provider.dart';

class ServiceSearchBar extends StatelessWidget {
  const ServiceSearchBar({super.key, required this.entreeProvider});

  final ListeEntreeProvider entreeProvider;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(4.0),
      child: SizedBox(
        width: 300,
        child: TextField(
          decoration: InputDecoration(
            labelText: 'Recherche par nom',
            labelStyle: const TextStyle(
              color: Colors.black,
            ),
            border: OutlineInputBorder(
              borderRadius: BorderRadius.circular(25.0),
              borderSide: const BorderSide(
                color: Colors.black,
              ),
            ),
            enabledBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(25.0),
              borderSide: const BorderSide(
                color: Colors.black,
              ),
            ),
            prefixIcon: const Icon(
              Icons.search,
              color: Colors.black,
            ),
            focusedBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(16.0),
              borderSide:
                  const BorderSide(color: Color.fromARGB(255, 61, 61, 61)),
            ),
          ),
          onChanged: (value) {
            entreeProvider.searchEntree(value);
            // entreeProvider.searchEntreeAPI(value);
          },
        ),
      ),
    );
  }
}
