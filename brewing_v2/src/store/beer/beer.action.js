import { BEER_ACTION_TYPES } from "./beer.type";

import { createAction } from "../../utils/reducers/reducer.utils";

export const setAllBeers = (items) => {
    return createAction(BEER_ACTION_TYPES.SET_ALL_BEERS, items)
}

export const setSelectedBeer = (item) => {
    return createAction(BEER_ACTION_TYPES.SET_SELECTED_BEER, item)
}