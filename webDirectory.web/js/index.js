import {loadEntreeRecherche, loadEntrees, loadTrieEntreesNom} from './entreeLoader.js';
import {display_entrees, display_entreesWithoutSort} from './entree_ui.js';
import {loadSearchedServices} from './search.js';
import TomSelect from "tom-select";
import {loadServices} from "./servicesLoader";

//1)
async function showEntrees(){
    let entrees = await loadEntrees();
    display_entrees(entrees);
}

//2)

async function showSearchedEntreesByServices(id){
    let entrees = await loadSearchedServices(id);
    display_entrees(entrees);
}

const buttonListeEntrees = document.getElementById('listeEntrees');
buttonListeEntrees.addEventListener('click', showEntrees);

async function services(){
    let services = await loadServices();
    new TomSelect("#searchService", {
        options: services,
        valueField: 'id',
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
    let entrees = await loadEntreeRecherche(recherche)
    display_entrees(entrees);
}

const buttonSearch = document.getElementById('searchNom');
buttonSearch.addEventListener('input', function(){
    showSearchedEntreesByNom(buttonSearch.value);
});


//5)
async function showSearchedEntreesByNomService(recherche){
    let entrees = await loadSearchedServices(recherche);
    let entrees2 = await loadEntreeRecherche(recherche);

    //On ajoute les deux listes d'entrees sans les doublons
    let result = {
        "type": "ressource",
        "entrees": []
    }

    for (let entree of entrees.entrees){
            result.entrees.push(entree);
    }

    for (let entree of entrees2.entrees){
        if (!result.entrees.includes(entree)){
            result.entrees.push(entree);
        }
    }

    display_entrees(result);
}

const buttonSearch2 = document.getElementById('searchNomService');
buttonSearch2.addEventListener('input', function(){
    showSearchedEntreesByNomService(buttonSearch2.value);
});

//6)
const selectTrieNom = document.getElementById('selectTriNom');
selectTrieNom.addEventListener('change', async function(){
    let entrees = await loadTrieEntreesNom(selectTrieNom.value);
    display_entreesWithoutSort(entrees);
});