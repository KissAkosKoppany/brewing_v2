import { beers } from "../Beers";

export async function httpGetAllBeers() {
    try {
        const allBeers = beers;
        return allBeers
    } catch(err) {
        console.log("error getting the beers", err)
    }
}