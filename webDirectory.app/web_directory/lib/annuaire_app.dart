import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:web_directory/partials/service_dropdown.dart';
import 'package:web_directory/partials/service_search_bar.dart';
import 'package:web_directory/providers/liste_entree_provider.dart';
import 'package:web_directory/providers/service_provider.dart';
import 'package:web_directory/screens/entree_master.dart';

class AnnuaireApp extends StatefulWidget {
  const AnnuaireApp({super.key});

  @override
  State<AnnuaireApp> createState() => _AnnuaireAppState();
}

class _AnnuaireAppState extends State<AnnuaireApp> {
  @override
  Widget build(BuildContext context) {
    var entreeProvider = Provider.of<ListeEntreeProvider>(context);
    var serviceProvider = Provider.of<ServiceProvider>(context);

    return Scaffold(
      appBar: AppBar(
        backgroundColor: const Color.fromRGBO(120, 194, 173, 1),
        title:
            const Text('Annuaire - App', style: TextStyle(color: Colors.white)),
        centerTitle: true,
      ),
      body: Column(
        children: <Widget>[
          Container(
            padding: const EdgeInsets.all(2),
            child: ServiceSearchBar(entreeProvider: entreeProvider),
          ),
          Container(
            padding: const EdgeInsets.all(2),
            child: ServiceDropdown(
                entreeProvider: entreeProvider,
                serviceProvider: serviceProvider),
          ),
          const Divider(color: Colors.grey, height: 20),
          const Expanded(
            child: EntreeMaster(),
          ),
        ],
      ),
    );
  }
}
