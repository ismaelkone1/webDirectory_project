import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:web_directory/models/Entree.dart';

class EntreeProvider extends ChangeNotifier {
  Future<List<Entree>> fetchEntree() async {
    final response =
        await http.get(Uri.parse('http://localhost:20003/api/entrees'));

    if (response.statusCode == 200) {
      var jsonData = jsonDecode(response.body);
      var entreesJson = jsonData['entrees'] as List;
      return entreesJson
          .map((entreeJson) => Entree.fromJson(entreeJson))
          .toList();
    } else {
      throw Exception('Failed to load Entrees');
    }
  }

  Future<List<Entree>> fetchEntreeAlphabetique() async {
    final response =
        await http.get(Uri.parse('http://localhost:20003/api/entrees'));

    if (response.statusCode == 200) {
      var jsonData = jsonDecode(response.body);
      var entreesJson = jsonData['entrees'] as List;
      var sortedEntrees =
          entreesJson.map((entreeJson) => Entree.fromJson(entreeJson)).toList();
      sortedEntrees.sort((a, b) {
        int compareNom = a.nom!.compareTo(b.nom!);
        if (compareNom == 0) {
          return a.prenom!.compareTo(b.prenom!);
        }
        return compareNom;
      });
      return sortedEntrees;
    } else {
      throw Exception('Failed to load Entrees');
    }
  }
}
