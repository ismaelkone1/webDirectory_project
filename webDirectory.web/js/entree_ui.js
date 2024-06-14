import Handlebars from 'handlebars';

const source = document.getElementById('entreeTemplate').innerHTML;
const template = Handlebars.compile(source);
export function display_entree(entree) {
    document.getElementById('template').innerHTML = template(entree);
}