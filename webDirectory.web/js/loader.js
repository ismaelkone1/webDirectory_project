import { pointEntree } from './config.js';

export function load( url ) {
    return fetch(`${pointEntree}${url}`)
        .then(response => response.json())
        .catch(error => console.error('Erreur lors du chargement de la ressource', error));
}

export function loadSansPointEntree( url ) {
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error('Erreur lors du chargement de la ressource', error));
}