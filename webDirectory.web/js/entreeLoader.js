import {load} from './loader.js';

async function loadEntrees(){
    return await load('/entrees');
}

export {loadEntrees};