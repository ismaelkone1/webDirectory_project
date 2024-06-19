import {load} from './loader.js';

async function loadServices(){
    return await load('/api/services');
}

export {loadServices};