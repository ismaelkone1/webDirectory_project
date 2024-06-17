import 'package:flutter/material.dart';
import 'package:web_directory/annuaire_app.dart';

Future<void> main() async {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: Scaffold(
        body: AnnuaireApp(),
      ),
    );
  }
}
