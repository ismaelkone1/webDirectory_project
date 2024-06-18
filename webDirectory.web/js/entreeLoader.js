import {load} from './loader.js';

async function loadEntrees(){
    return await load('/entrees');
}

async function loadEntreeRecherche(recherche){
    return await load(`/entrees/search?q=${recherche}`);
}
export {loadEntrees, loadEntreeRecherche};