import {load} from './loader.js';

async function loadEntrees(){
    return await load('/api/entrees');
}

async function loadEntreeRecherche(recherche){
    return await load(`/api/entrees/search?q=${recherche}`);
}

async function loadTrieEntreesNom(sens){
    return await load('/api/entrees?sort=' + sens);
}

async function loadEntreesDuServiceEnFonctionDuNom(idService, recherche){
    return await load(`/api/services/${idService}/entrees?q=${recherche}`);
}

export {loadEntrees, loadEntreeRecherche, loadTrieEntreesNom, loadEntreesDuServiceEnFonctionDuNom};