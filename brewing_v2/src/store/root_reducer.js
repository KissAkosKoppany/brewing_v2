import { combineReducers } from "redux";

import { beerReducer } from "./beer/beer.reducer";

export const rootReducer = combineReducers({
    beer: beerReducer
})