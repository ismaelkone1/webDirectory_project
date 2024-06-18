import {loadEntrees} from './entreeLoader.js';
import {display_entree} from './entree_ui.js';
import {searchEntrees, searchServices} from './search.js';
import TomSelect from "tom-select";
import {loadServices} from "./servicesLoader";

//1)
async function showEntrees(){
    let entrees = await loadEntrees();
    display_entree(entrees);
}

//2)

async function showSearchedEntreesByServices(recherche){
    let entrees = await searchServices(recherche);
    display_entree(entrees);
}

const buttonListeEntrees = document.getElementById('listeEntrees');
buttonListeEntrees.addEventListener('click', showEntrees);

async function services(){
    let services = await loadServices();
    new TomSelect("#searchService", {
        options: services,
        valueField: 'libelle',
        labelField: 'libelle',
        searchField: 'libelle',
        create: false,
        maxItems: 1,
        persist: false,
        onChange: async function(value){
            showSearchedEntreesByServices(value);
        }
    });
}
services();

//3)
async function showSearchedEntreesByNom(recherche){
    let entrees = await searchEntrees(recherche);
    display_entree(entrees);
}

const buttonSearch = document.getElementById('searchNom');
buttonSearch.addEventListener('input', function(){
    showSearchedEntreesByNom(buttonSearch.value);
});