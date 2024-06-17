import {loadEntrees} from './entreeLoader.js';
import {display_entree} from './entree_ui.js';
import {searchEntrees} from './search.js';

function sortEntrees(entrees){
    //On trie les entrées dans l'ordre alphabétique sur le nom ou le prenom si le nom est le meme
    entrees.sort((a, b) => {
        if(a.nom === b.nom){
            return a.prenom.localeCompare(b.prenom);
        }
        return a.nom.localeCompare(b.nom);
    });
}
async function showEntrees(){
    let entrees = await loadEntrees();
    sortEntrees(entrees.entrees);
    display_entree(entrees);
}

async function showSearchedEntrees(recherche){
    let entrees = await searchEntrees(recherche);
    sortEntrees(entrees.entrees);
    display_entree(entrees);
}

const buttonListeEntrees = document.getElementById('listeEntrees');
buttonListeEntrees.addEventListener('click', showEntrees);

const search = document.getElementById('autoComplete');
search.addEventListener('input', function(){
    showSearchedEntrees(search.value);
});