import 'package:flutter/material.dart';
import 'package:web_directory/models/Entree.dart';
import 'package:web_directory/providers/entree_provider.dart';
import 'package:web_directory/screens/entree_master.dart';

class AnnuaireApp extends StatefulWidget {
  const AnnuaireApp({super.key});

  @override
  State<AnnuaireApp> createState() => _AnnuaireAppState();
}

class _AnnuaireAppState extends State<AnnuaireApp> {
  late Future<List<Entree>> futureEntrees;

  @override
  void initState() {
    super.initState();
    futureEntrees = EntreeProvider().fetchEntreeAlphabetique();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Fetch Data Example',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
      ),
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Fetch Data Example'),
        ),
        body: EntreeMaster(futureEntrees: futureEntrees),
      ),
    );
  }
}
