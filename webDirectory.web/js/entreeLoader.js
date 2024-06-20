import {load} from './loader.js';

async function loadEntrees(){
    return await load('/api/entrees');
}

async function loadEntreeRecherche(recherche){
    return await load(`/api/entrees/search?q=${recherche}`);
}

async function loadTrieEntrees(sens){
    let search = document.getElementById('searchNom');
    let idService = document.getElementById('searchService');
    if (search.value === "" && idService.value === ""){
        return await load('/api/entrees?sort=' + sens);
    }
    else if (search.value === ""){
        return await load('/api/services/' + idService.value + '/entrees?sort=' + sens);
    }
    else if (idService.value === ""){
        return await load('/api/entrees/search?q=' + search.value + '&sort=' + sens);
    }
    else{
        return await load('/api/services/' + idService.value + '/entrees?q=' + search.value + '&sort=' + sens);
    }
}

async function loadEntreesDuServiceEnFonctionDuNom(idService, recherche){
    return await load(`/api/services/${idService}/entrees?q=${recherche}`);
}

export {loadEntrees, loadEntreeRecherche, loadTrieEntrees, loadEntreesDuServiceEnFonctionDuNom};