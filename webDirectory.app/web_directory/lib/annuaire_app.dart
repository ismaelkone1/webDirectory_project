import 'package:flutter/material.dart';
import 'package:web_directory/models/Entree.dart';
import 'package:web_directory/providers/entree_provider.dart';

class AnnuaireApp extends StatefulWidget {
  const AnnuaireApp({super.key});

  @override
  State<AnnuaireApp> createState() => _AnnuaireAppState();
}

class _AnnuaireAppState extends State<AnnuaireApp> {
  late Future<Entree> futureEntree;

  @override
  void initState() {
    super.initState();
    futureEntree = EntreeProvider().fetchEntree();
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
        body: Center(
          child: FutureBuilder<Entree>(
            future: futureEntree,
            builder: (context, snapshot) {
              if (snapshot.hasData) {
                return Text(snapshot.data?.nom ?? '');
              } else if (snapshot.hasError) {
                return Text('${snapshot.error}');
              }

              return const CircularProgressIndicator();
            },
          ),
        ),
      ),
    );
  }
}
