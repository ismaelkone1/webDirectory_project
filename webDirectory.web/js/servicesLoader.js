import {load} from './loader.js';

async function loadServices(){
    return await load('/services');
}

export {loadServices};