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

  Future<List<ListeEntree>> getEntreeAlphabetiqueASC() async {
    if (entrees.isEmpty && !isSearching) {
      entrees.clear();
      await _fetchEntreeAlphabetiqueASC();
    }

    return entrees;
  }

  Future<void> _fetchEntreeAlphabetiqueASC() async {
    // final response =
    //     await http.get(Uri.parse('http://localhost:20003/api/entrees'));
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

  Future<void> searchEntreeByService(String libelle) async {
    _searchCompleter?.complete();
    _searchCompleter = Completer<void>();

    isSearching = true;
    notifyListeners();

    if (libelle.isEmpty || libelle == 'Tous') {
      entrees.clear();
      await _fetchEntreeAlphabetiqueASC();
      isSearching = false;
    } else {
      var localCompleter = _searchCompleter;

      entrees.clear();
      await _fetchEntreeAlphabetiqueASC();

      var response = entrees.where((entree) {
        return entree.services!.any((service) {
          return service.libelle!.toLowerCase().contains(libelle.toLowerCase());
        });
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

  // Future<void> searchEntreeByServiceAPI(int id) async {
  //   _searchCompleter?.complete();
  //   _searchCompleter = Completer<void>();

  //   isSearching = true;
  //   notifyListeners();

  //   if (id == -1) {
  //     entrees.clear();
  //     await _fetchEntreeAlphabetiqueASC();
  //     isSearching = false;
  //   } else {
  //     var localCompleter = _searchCompleter;

  //     entrees.clear();
  //     final response = await http.get(Uri.parse(
  //         'http://docketu.iutnc.univ-lorraine.fr:20003/api/services/$id/entrees'));

  //     if (response.statusCode == 200) {
  //       var jsonData = jsonDecode(response.body);
  //       var entreesJson = jsonData['entrees'] as List;
  //       for (var entreeJson in entreesJson) {
  //         entrees.add(ListeEntree.fromJson(entreeJson));
  //       }
  //     } else {
  //       throw Exception('Failed to load Entrees');
  //     }

  //     if (localCompleter != _searchCompleter) {
  //       return;
  //     }

  //     if (response.body.isEmpty) {
  //       noResultsFound = true;
  //     } else {
  //       noResultsFound = false;
  //     }
  //   }

  //   isSearching = false;
  //   notifyListeners();
  // }

  Future<void> searchEntree(String search) async {
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

  // Future<void> searchEntreeAPI(String search) async {
  //   _searchCompleter?.complete();
  //   _searchCompleter = Completer<void>();

  //   isSearching = true;
  //   notifyListeners();

  //   if (search.isEmpty) {
  //     entrees.clear();
  //     await _fetchEntreeAlphabetiqueASC();
  //     isSearching = false;
  //   } else {
  //     var localCompleter = _searchCompleter;

  //     entrees.clear();
  //     final response = await http.get(Uri.parse(
  //         'http://docketu.iutnc.univ-lorraine.fr:20003/api/entrees/search?q=$search'));

  //     if (response.statusCode == 200) {
  //       var jsonData = jsonDecode(response.body);
  //       var entreesJson = jsonData['entrees'] as List;
  //       for (var entreeJson in entreesJson) {
  //         entrees.add(ListeEntree.fromJson(entreeJson));
  //       }
  //     } else {
  //       throw Exception('Failed to load Entrees');
  //     }

  //     if (localCompleter != _searchCompleter) {
  //       return;
  //     }

  //     if (response.body.isEmpty) {
  //       noResultsFound = true;
  //     } else {
  //       noResultsFound = false;
  //     }
  //   }

  //   isSearching = false;
  //   notifyListeners();
  // }

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
