import {load} from "./loader";

export async function loadSearchedServices(id){
    return await load('/api/services/' + id + '/entrees');
}