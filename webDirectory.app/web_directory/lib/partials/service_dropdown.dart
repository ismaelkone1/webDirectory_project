import 'package:flutter/material.dart';
import 'package:web_directory/models/Service.dart';
import 'package:web_directory/providers/liste_entree_provider.dart';
import 'package:web_directory/providers/service_provider.dart';

class ServiceDropdown extends StatefulWidget {
  const ServiceDropdown(
      {super.key, required this.entreeProvider, required this.serviceProvider});

  final ListeEntreeProvider entreeProvider;
  final ServiceProvider serviceProvider;

  @override
  _ServiceDropdownState createState() => _ServiceDropdownState();
}

class _ServiceDropdownState extends State<ServiceDropdown> {
  Service? selectedService;

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<List<Service>>(
      future: widget.serviceProvider.getServices(),
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return const CircularProgressIndicator();
        } else if (snapshot.hasError) {
          return Text('Erreur: ${snapshot.error}');
        } else if (!snapshot.hasData || snapshot.data!.isEmpty) {
          return const Text('Aucun service trouvé');
        } else {
          return DropdownButton<Service>(
            items: snapshot.data!.map((service) {
              return DropdownMenuItem<Service>(
                value: service,
                child: Text(service.libelle!),
              );
            }).toList(),
            onChanged: (Service? value) {
              setState(() {
                selectedService = value;
              });
              if (value != null) {
                widget.entreeProvider.searchEntreeByServiceAPI(value.id!);
                widget.entreeProvider.rechercheService = value.id!;
                // widget.entreeProvider.searchEntreeByServiceAPI(value.id!);
              }
            },
            hint: const Text('Sélectionner un service'),
            value: selectedService,
            style: const TextStyle(color: Colors.black),
            icon: const Icon(Icons.arrow_drop_down),
            iconSize: 24,
            elevation: 16,
            underline: Container(
              height: 2,
              color: Colors.black,
            ),
            borderRadius: BorderRadius.circular(15.0),
          );
        }
      },
    );
  }
}
