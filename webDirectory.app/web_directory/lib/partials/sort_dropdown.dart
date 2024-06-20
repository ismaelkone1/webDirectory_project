import 'package:flutter/material.dart';
import 'package:web_directory/providers/liste_entree_provider.dart';

class SortDropdown extends StatefulWidget {
  const SortDropdown({super.key, required this.entreeProvider});

  final ListeEntreeProvider entreeProvider;

  @override
  _SortDropdownState createState() => _SortDropdownState();
}

class _SortDropdownState extends State<SortDropdown> {
  String _currentSort = 'ASC';

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        const Spacer(),
        DropdownButton<String>(
          value: _currentSort,
          onChanged: (String? newValue) {
            if (newValue != null) {
              setState(() {
                widget.entreeProvider.rechercheSort = newValue;
                _currentSort = newValue;
                if (newValue == 'ASC') {
                  widget.entreeProvider.sortEntreeByASC();
                } else {
                  widget.entreeProvider.sortEntreeByDESC();
                }
              });
            }
          },
          items: <String>['ASC', 'DESC']
              .map<DropdownMenuItem<String>>((String value) {
            return DropdownMenuItem<String>(
              value: value,
              child: Text(value),
            );
          }).toList(),
          style: const TextStyle(color: Colors.black),
          icon: const Icon(Icons.arrow_drop_down),
          iconSize: 24,
          elevation: 16,
          underline: Container(
            height: 2,
            color: Colors.black,
          ),
          borderRadius: BorderRadius.circular(15.0),
        ),
      ],
    );
  }
}
