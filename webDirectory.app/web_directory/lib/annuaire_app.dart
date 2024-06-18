import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:web_directory/providers/entree_provider.dart';
import 'package:web_directory/screens/entree_master.dart';

class AnnuaireApp extends StatefulWidget {
  const AnnuaireApp({super.key});

  @override
  State<AnnuaireApp> createState() => _AnnuaireAppState();
}

class _AnnuaireAppState extends State<AnnuaireApp> {
  @override
  Widget build(BuildContext context) {
    var entreeProvider = Provider.of<EntreeProvider>(context);

    return Scaffold(
      appBar: AppBar(
        backgroundColor: const Color.fromRGBO(120, 194, 173, 1),
        title:
            const Text('Annuaire - App', style: TextStyle(color: Colors.white)),
        centerTitle: true,
      ),
      body: Column(
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.all(16.0),
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
                    borderSide: const BorderSide(
                        color: Color.fromARGB(255, 61, 61, 61)),
                  ),
                ),
                onChanged: (value) {
                  entreeProvider.searchEntree(value);
                },
              ),
            ),
          ),
          const Expanded(
            child: EntreeMaster(),
          ),
        ],
      ),
    );
  }
}
