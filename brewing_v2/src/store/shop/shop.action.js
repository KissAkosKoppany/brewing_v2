import { SHOP_ACTION_TYPES } from "./shop.type";

import { createAction } from "../../utils/reducers/reducer.utils";

export const setShopItems = (items) => {
    return createAction(SHOP_ACTION_TYPES.SET_SHOP_ITEMS, items)
}

export const setShopFilter = (filter) => {
    return createAction(SHOP_ACTION_TYPES.FILTER_SHOP_ITEMS)
}