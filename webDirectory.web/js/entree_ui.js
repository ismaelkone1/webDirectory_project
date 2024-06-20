import Handlebars from 'handlebars';
import {load} from "./loader";

const source = document.getElementById('entreesTemplate').innerHTML;
const template = Handlebars.compile(source);
export function display_entrees(entrees){
    document.getElementById('template').innerHTML = template(entrees);
    document.querySelectorAll('.entree').forEach(entree => {
        entree.addEventListener('click', async () => {
            const url = entree.dataset.url;
            entree = await load(url);
            display_entree(entree);
        });
    });
}

const source2 = document.getElementById('entreeTemplate').innerHTML;
const template2 = Handlebars.compile(source2);
export function display_entree(entree){
    document.getElementById('template').innerHTML = template2(entree.entree);
}