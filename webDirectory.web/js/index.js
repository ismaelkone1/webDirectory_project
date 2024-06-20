import {
    loadEntreeRecherche,
    loadEntrees,
    loadEntreesDuServiceEnFonctionDuNom,
    loadTrieEntreesNom
} from './entreeLoader.js';
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

async function showSearchedEntreesByServices(id, nom= ""){
    let entrees;

    if (id === ""){
        entrees = await loadEntrees();
    }
    else if (nom === ""){
        entrees = await loadSearchedServices(id);
    }
    else{
        entrees = await loadEntreesDuServiceEnFonctionDuNom(id, nom);
    }
    display_entrees(entrees);
}

const buttonListeEntrees = document.getElementById('listeEntrees');
buttonListeEntrees.addEventListener('click', showEntrees);

async function services(){
    let services = await loadServices();
    //On ajout en option le service "Tous les services"
    services.services.unshift({id: "", libelle: "Tous les services"});
    new TomSelect("#searchService", {
        options: services,
        valueField: 'id',
        labelField: 'libelle',
        searchField: 'libelle',
        create: false,
        maxItems: 1,
        persist: false,
        onChange: async function(value){
            showSearchedEntreesByServices(value, buttonSearch.value);
        }
    });
}
services();

//3)
async function showSearchedEntreesByNom(recherche, idService = ""){
    let entrees;
    if (idService === ""){
        entrees = await loadEntreeRecherche(recherche);
    }
    else{
        entrees = await loadEntreesDuServiceEnFonctionDuNom(parseInt(idService), recherche);
    }
    display_entrees(entrees);
}

const buttonSearch = document.getElementById('searchNom');
buttonSearch.addEventListener('input', function(){
    showSearchedEntreesByNom(buttonSearch.value, document.getElementById('searchService').value);
});

//6)
const selectTrieNom = document.getElementById('selectTriNom');
selectTrieNom.addEventListener('change', async function(){
    let entrees = await loadTrieEntreesNom(selectTrieNom.value);
    display_entreesWithoutSort(entrees);
});