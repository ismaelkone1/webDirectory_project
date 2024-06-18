import Handlebars from 'handlebars';
import {loadSansPointEntree} from "./loader";

const source = document.getElementById('entreesTemplate').innerHTML;
const template = Handlebars.compile(source);

function sortEntrees(entrees){
    //On trie les entrées dans l'ordre alphabétique sur le nom ou le prenom si le nom est le meme
    entrees.sort((a, b) => {
        if(a.nom === b.nom){
            return a.prenom.localeCompare(b.prenom);
        }
        return a.nom.localeCompare(b.nom);
    });
}

export function display_entrees(entrees) {
    sortEntrees(entrees.entrees);
    document.getElementById('template').innerHTML = template(entrees);
    document.querySelectorAll('.entree').forEach(entree => {
        entree.addEventListener('click', async () => {
            const url = entree.dataset.url;
            entree = await loadSansPointEntree(url);
            display_entree(entree);
        });
    });
}

const source2 = document.getElementById('entreeTemplate').innerHTML;
const template2 = Handlebars.compile(source2);
export function display_entree(entree){
    document.getElementById('template').innerHTML = template2(entree.entree);
}