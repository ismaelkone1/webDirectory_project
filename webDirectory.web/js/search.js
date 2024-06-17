import {loadEntrees} from "./entreeLoader";

let entrees;

export async function searchEntrees(recherche){
    if (entrees === undefined)
        entrees = await loadEntrees();

    let result = {
        "type": "ressource",
        "entrees": []
    }
    for (let entree of entrees.entrees){
        entree.services.forEach(service => {
            if (service.libelle.toLowerCase().includes(recherche.toLowerCase())){
                result.entrees.push(entree);
            }
        });
    }
    return result;
}