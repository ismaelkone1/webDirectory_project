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
export {loadEntrees, loadEntreeRecherche, loadTrieEntreesNom};