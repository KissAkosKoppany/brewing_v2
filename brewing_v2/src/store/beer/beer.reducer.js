import { BEER_ACTION_TYPES } from "./beer.type";

const INITIAL_STATE = {
    allBeers: null,
    beerFilter: "all"
}

export const beerReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case BEER_ACTION_TYPES.SET_ALL_BEERS:
            return {
                ...state,
                allBeers: payload
            }
        case BEER_ACTION_TYPES.SET_BEER_FILTER:
            return {
                ...state,
                beerFilter: payload
            }
        default:
            return state
    }
}