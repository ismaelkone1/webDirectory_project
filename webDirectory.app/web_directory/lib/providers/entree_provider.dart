import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:web_directory/models/Entree.dart';

class EntreeProvider extends ChangeNotifier {
  Entree? entree;

  Future<Entree?> getEntree(String url) async {
    try {
      await _fetchEntree(url);
    } catch (e) {
      throw Exception('Failed to load Entree :');
    }
    return entree;
  }

  Future<void> _fetchEntree(String url) async {
    // final response = await http.get(Uri.parse('http://localhost:20003$url'));
    final response = await http
        .get(Uri.parse('http://docketu.iutnc.univ-lorraine.fr:20003$url'));

    if (response.statusCode == 200) {
      var jsonData = jsonDecode(response.body);
      var entreeJson = jsonData['entree'] as Map<String, dynamic>;
      entree = Entree.fromJson(entreeJson);
    } else {
      throw Exception('Failed to load Entree');
    }
  }
}
