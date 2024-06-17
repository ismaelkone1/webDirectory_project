import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:web_directory/models/Entree.dart';

class EntreeProvider extends ChangeNotifier {
  Future<Entree> fetchEntree() async {
    final response =
        await http.get(Uri.parse('http://localhost:20003/api/entrees'));

    if (response.statusCode == 200) {
      return Entree.fromJson(jsonDecode(response.body) as Map<String, dynamic>);
    } else {
      throw Exception('Failed to load entree');
    }
  }
}
