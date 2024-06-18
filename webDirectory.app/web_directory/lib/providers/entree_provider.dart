import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:web_directory/models/Entree.dart';

class EntreeProvider extends ChangeNotifier {
  List<Entree> entrees = [];
  bool isSearching = false;
  bool noResultsFound = false;
  Completer<void>? _searchCompleter;

  Future<List<Entree>> getEntree() async {
    if (entrees.isEmpty && !isSearching) {
      entrees.clear();
      await _fetchEntree();
    }

    return entrees;
  }

  Future<void> _fetchEntree() async {
    final response =
        await http.get(Uri.parse('http://localhost:20003/api/entrees'));

    if (response.statusCode == 200) {
      var jsonData = jsonDecode(response.body);
      var entreesJson = jsonData['entrees'] as List;
      for (var entreeJson in entreesJson) {
        entrees.add(Entree.fromJson(entreeJson));
      }
    } else {
      throw Exception('Failed to load Entrees');
    }
  }

  Future<List<Entree>> getEntreeAlphabetique() async {
    if (entrees.isEmpty && !isSearching) {
      entrees.clear();
      await _fetchEntreeAlphabetique();
    }

    return entrees;
  }

  Future<void> _fetchEntreeAlphabetique() async {
    final response =
        await http.get(Uri.parse('http://localhost:20003/api/entrees'));

    if (response.statusCode == 200) {
      var jsonData = jsonDecode(response.body);
      var entreesJson = jsonData['entrees'] as List;
      for (var entreeJson in entreesJson) {
        entrees.add(Entree.fromJson(entreeJson));
      }
      entrees.sort((a, b) {
        int compareNom = a.nom!.compareTo(b.nom!);
        if (compareNom == 0) {
          return a.prenom!.compareTo(b.prenom!);
        }
        return compareNom;
      });
    } else {
      throw Exception('Failed to load Entrees');
    }
  }

  Future<void> searchEntree(String search) async {
    _searchCompleter?.complete();
    _searchCompleter = Completer<void>();

    isSearching = true;
    notifyListeners();

    if (search.isEmpty) {
      entrees.clear();
      await _fetchEntreeAlphabetique();
      isSearching = false;
    } else {
      var localCompleter = _searchCompleter;

      var response = entrees.where((entree) {
        return entree.nom!.toLowerCase().contains(search.toLowerCase());
      }).toList();

      if (localCompleter != _searchCompleter) {
        return;
      }

      if (response.isEmpty) {
        noResultsFound = true;
      } else {
        noResultsFound = false;
      }

      entrees = response;
    }

    isSearching = false;
    notifyListeners();
  }
}
