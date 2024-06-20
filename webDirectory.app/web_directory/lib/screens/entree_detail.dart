import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:web_directory/models/Entree.dart';
import 'package:web_directory/providers/entree_provider.dart';

class EntreeDetail extends StatefulWidget {
  const EntreeDetail({super.key, required this.url});

  final String url;

  @override
  State<EntreeDetail> createState() => _EntreeDetailState();
}

class _EntreeDetailState extends State<EntreeDetail> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: const Color.fromRGBO(120, 194, 173, 1),
        title: const Text('Détail de l\'entrée',
            style: TextStyle(color: Colors.white)),
        centerTitle: true,
      ),
      body: FutureBuilder<Entree?>(
        future: Provider.of<EntreeProvider>(context).getEntree(widget.url),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          } else if (snapshot.hasError) {
            return Center(child: Text('Erreur: ${snapshot.error}'));
          } else if (snapshot.hasData) {
            Entree entree = snapshot.data!;
            return SingleChildScrollView(
              child: Card(
                margin: const EdgeInsets.all(8.0),
                child: Column(
                  children: [
                    if (entree.urlImage.isNotEmpty)
                      Image.network(entree.urlImage,
                          width: 100, height: 100, fit: BoxFit.cover),
                    const SizedBox(height: 20),
                    ListTile(
                      leading: const Icon(Icons.account_circle,
                          size: 40.0, color: Colors.grey),
                      title: Text('Nom : ${entree.nom}',
                          style: const TextStyle(
                              fontSize: 20.0, fontWeight: FontWeight.bold)),
                    ),
                    const Divider(
                        color: Color.fromRGBO(120, 194, 173, 1), height: 20),
                    ListTile(
                      leading: const Icon(Icons.account_circle_outlined,
                          size: 40.0, color: Colors.grey),
                      title: Text('Prénom : ${entree.prenom}',
                          style: const TextStyle(
                              fontSize: 20.0, fontWeight: FontWeight.bold)),
                    ),
                    const Divider(
                        color: Color.fromRGBO(120, 194, 173, 1), height: 20),
                    ListTile(
                      leading: const Icon(Icons.work,
                          size: 40.0, color: Colors.grey),
                      title: Text('Fonction : ${entree.fonction}',
                          style: const TextStyle(
                              fontSize: 20.0, fontWeight: FontWeight.bold)),
                    ),
                    const Divider(
                        color: Color.fromRGBO(120, 194, 173, 1), height: 20),
                    ListTile(
                      leading: const Icon(Icons.email,
                          size: 40.0, color: Colors.grey),
                      title: GestureDetector(
                        onTap: () async {
                          final email = entree.email;
                          final uri = Uri(
                            scheme: 'mailto',
                            path: email,
                          );
                          try {
                            await launchUrl(uri);
                          } catch (e) {
                            print('Error: $e');
                          }
                        },
                        child: Text(entree.email,
                            style: const TextStyle(
                                fontSize: 20.0,
                                fontWeight: FontWeight.bold,
                                color: Colors.blue,
                                decoration: TextDecoration.underline,
                                decorationStyle: TextDecorationStyle.solid,
                                decorationColor: Colors.blue)),
                      ),
                    ),
                    const Divider(
                        color: Color.fromRGBO(120, 194, 173, 1), height: 20),
                    for (var telephone in entree.telephones)
                      ListTile(
                        leading: const Icon(Icons.phone,
                            size: 40.0, color: Colors.grey),
                        title: GestureDetector(
                          onTap: () async {
                            final tel = telephone.numero ?? '';
                            final uri = Uri(
                              scheme: 'tel',
                              path: tel,
                            );
                            try {
                              await launchUrl(uri);
                            } catch (e) {
                              print('Error: $e');
                            }
                          },
                          child: Text('${telephone.numero}',
                              style: const TextStyle(
                                  fontSize: 20.0,
                                  fontWeight: FontWeight.bold,
                                  color: Colors.blue,
                                  decoration: TextDecoration.underline,
                                  decorationStyle: TextDecorationStyle.solid,
                                  decorationColor: Colors.blue)),
                        ),
                      ),
                    const Divider(
                        color: Color.fromRGBO(120, 194, 173, 1), height: 20),
                    for (var service in entree.services)
                      ListTile(
                        leading: const Icon(Icons.business,
                            size: 40.0, color: Colors.grey),
                        title: Text('Service : ${service.libelle}',
                            style: const TextStyle(
                                fontSize: 20.0, fontWeight: FontWeight.bold)),
                      ),
                  ],
                ),
              ),
            );
          } else {
            return const Center(child: Text('Aucune donnée disponible.'));
          }
        },
      ),
    );
  }
}
