import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';
import 'package:web_directory/models/Service.dart';

class ServiceProvider extends ChangeNotifier {
  List<Service> services = [];

  Future<List<Service>> getServices() async {
    if (services.isEmpty) {
      services.clear();
      await _fetchService();
    }

    return services;
  }

  Future<void> _fetchService() async {
    final response =
        await http.get(Uri.parse('http://localhost:20003/api/services'));

    if (response.statusCode == 200) {
      var jsonData = jsonDecode(response.body);
      var servicesJson = jsonData['services'] as List;
      services.add(Service(id: -1, libelle: 'Tous'));
      for (var serviceJson in servicesJson) {
        services.add(Service.fromJson(serviceJson));
      }
    } else {
      throw Exception('Failed to load Services');
    }
  }
}
