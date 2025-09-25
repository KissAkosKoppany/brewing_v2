import { BEER_ACTION_TYPES } from "./beer.type";

const INITIAL_STATE = {
    allBeers: null,
    selectedBeer: null,
}

export const beerReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case BEER_ACTION_TYPES.SET_ALL_BEERS:
            return {
                ...state,
                allBeers: payload
            }
        case BEER_ACTION_TYPES.SET_SELECTED_BEER:
            return {
                ...state,
                selectedBeer: payload
            }
        default:
            return state
    }
}