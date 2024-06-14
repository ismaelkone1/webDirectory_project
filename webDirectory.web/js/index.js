import {loadEntrees} from './entreeLoader.js';
import {display_entree} from './entree_ui.js';
async function showEntrees(){
    let entrees = await loadEntrees();
    console.log(entrees);
    display_entree(entrees);
}

showEntrees();