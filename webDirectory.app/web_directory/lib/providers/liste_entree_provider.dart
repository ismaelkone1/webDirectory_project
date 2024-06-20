import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:web_directory/models/ListeEntree.dart';

class ListeEntreeProvider extends ChangeNotifier {
  List<ListeEntree> entrees = [];
  bool isSearching = false;
  bool noResultsFound = false;
  Completer<void>? _searchCompleter;
  String rechercheNom = '';
  int rechercheService = -1;
  String rechercheSort = '';

  Future<List<ListeEntree>> getEntreeAlphabetiqueASC() async {
    if (entrees.isEmpty && !isSearching) {
      entrees.clear();
      await _fetchEntreeAlphabetiqueASC();
    }

    return entrees;
  }

  Future<void> _fetchEntreeAlphabetiqueASC() async {
    // final response =
    // await http.get(Uri.parse('http://localhost:20003/api/entrees'));
    final response = await http.get(
        Uri.parse('http://docketu.iutnc.univ-lorraine.fr:20003/api/entrees'));

    if (response.statusCode == 200) {
      var jsonData = jsonDecode(response.body);
      var entreesJson = jsonData['entrees'] as List;
      for (var entreeJson in entreesJson) {
        entrees.add(ListeEntree.fromJson(entreeJson));
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

  Future<void> searchEntreeByServiceAPI(int id) async {
    if (rechercheNom.isNotEmpty) {
      searchByEntreeService(rechercheNom, id);
      return;
    }

    _searchCompleter?.complete();
    _searchCompleter = Completer<void>();

    isSearching = true;
    notifyListeners();

    if (id == -1) {
      entrees.clear();
      await _fetchEntreeAlphabetiqueASC();
      isSearching = false;
    } else {
      var localCompleter = _searchCompleter;

      entrees.clear();
      final response = await http.get(Uri.parse(
          'http://docketu.iutnc.univ-lorraine.fr:20003/api/services/$id/entrees'));

      if (response.statusCode == 200) {
        var jsonData = jsonDecode(response.body);
        var entreesJson = jsonData['entrees'] as List;
        for (var entreeJson in entreesJson) {
          entrees.add(ListeEntree.fromJson(entreeJson));
        }
        switchSort();
      } else {
        throw Exception('Failed to load Entrees');
      }

      if (localCompleter != _searchCompleter) {
        return;
      }

      if (response.body.isEmpty) {
        noResultsFound = true;
      } else {
        noResultsFound = false;
      }
    }

    isSearching = false;
    notifyListeners();
  }

  Future<void> searchEntreeAPI(String search) async {
    if (rechercheService != -1) {
      searchByEntreeService(search, rechercheService);
      return;
    }

    _searchCompleter?.complete();
    _searchCompleter = Completer<void>();

    isSearching = true;
    notifyListeners();

    if (search.isEmpty) {
      entrees.clear();
      await _fetchEntreeAlphabetiqueASC();
      isSearching = false;
    } else {
      var localCompleter = _searchCompleter;

      entrees.clear();
      final response = await http.get(Uri.parse(
          'http://docketu.iutnc.univ-lorraine.fr:20003/api/entrees/search?q=$search'));

      if (response.statusCode == 200) {
        var jsonData = jsonDecode(response.body);
        var entreesJson = jsonData['entrees'] as List;
        for (var entreeJson in entreesJson) {
          entrees.add(ListeEntree.fromJson(entreeJson));
        }
        switchSort();
      } else {
        throw Exception('Failed to load Entrees');
      }

      if (localCompleter != _searchCompleter) {
        return;
      }

      if (response.body.isEmpty) {
        noResultsFound = true;
      } else {
        noResultsFound = false;
      }
    }

    isSearching = false;
    notifyListeners();
  }

  Future<void> searchByEntreeService(String search, int id) async {
    _searchCompleter?.complete();
    _searchCompleter = Completer<void>();

    print('search: $search, id: $id');

    isSearching = true;
    notifyListeners();

    if (search.isEmpty && id == -1) {
      entrees.clear();
      await searchEntreeByServiceAPI(id);
      isSearching = false;
    } else {
      var localCompleter = _searchCompleter;

      entrees.clear();
      final response = await http.get(Uri.parse(
          'http://docketu.iutnc.univ-lorraine.fr:20003/api/services/$id/entrees?q=$search'));

      if (response.statusCode == 200) {
        var jsonData = jsonDecode(response.body);
        var entreesJson = jsonData['entrees'] as List;
        for (var entreeJson in entreesJson) {
          entrees.add(ListeEntree.fromJson(entreeJson));
        }
        switchSort();
      } else {
        throw Exception('Failed to load Entrees');
      }

      if (localCompleter != _searchCompleter) {
        return;
      }

      if (response.body.isEmpty) {
        noResultsFound = true;
      } else {
        noResultsFound = false;
      }
    }

    isSearching = false;
    notifyListeners();
  }

  void switchSort() {
    if (rechercheSort == 'ASC') {
      rechercheSort = 'DESC';
      sortEntreeByDESC();
    } else {
      rechercheSort = 'ASC';
      sortEntreeByASC();
    }
  }

  Future<void> sortEntreeByASC() async {
    entrees.sort((a, b) {
      int compareNom = a.nom!.compareTo(b.nom!);
      if (compareNom == 0) {
        return a.prenom!.compareTo(b.prenom!);
      }
      return compareNom;
    });

    notifyListeners();
  }

  Future<void> sortEntreeByDESC() async {
    entrees.sort((a, b) {
      int compareNom = b.nom!.compareTo(a.nom!);
      if (compareNom == 0) {
        return b.prenom!.compareTo(a.prenom!);
      }
      return compareNom;
    });

    notifyListeners();
  }
}
