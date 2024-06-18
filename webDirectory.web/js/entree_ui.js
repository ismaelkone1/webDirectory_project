import Handlebars from 'handlebars';

const source = document.getElementById('entreeTemplate').innerHTML;
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

export function display_entree(entrees) {
    sortEntrees(entrees.entrees);
    document.getElementById('template').innerHTML = template(entrees);
}