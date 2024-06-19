import {load} from './loader.js';

async function loadEntrees(){
    return await load('/entrees');
}

async function loadEntreeRecherche(recherche){
    return await load(`/entrees/search?q=${recherche}`);
}

async function loadTrieEntreesNom(sens){
    return await load('/entrees?sort=nom-' + sens);
}
export {loadEntrees, loadEntreeRecherche, loadTrieEntreesNom};