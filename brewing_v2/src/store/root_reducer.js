import { combineReducers } from "redux";

import { shopReducer } from "./shop/shop.reducer";

export const rootReducer = combineReducers({
    shop: shopReducer
})