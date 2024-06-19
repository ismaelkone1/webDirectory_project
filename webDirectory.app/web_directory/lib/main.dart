import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:web_directory/annuaire_app.dart';
import 'package:web_directory/providers/liste_entree_provider.dart';
import 'package:web_directory/providers/service_provider.dart';

Future<void> main() async {
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (context) => ListeEntreeProvider()),
        ChangeNotifierProvider(create: (context) => ServiceProvider()),
      ],
      child: const MainApp(),
    ),
  );
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      title: 'Annuaire - App',
      debugShowCheckedModeBanner: false,
      home: AnnuaireApp(),
    );
  }
}
