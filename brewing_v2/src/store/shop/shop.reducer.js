import { SHOP_ACTION_TYPES } from "./shop.type";

const INITIAL_STATE = {
    shopItems: null,
    shopFilter: null
}

export const shopReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case SHOP_ACTION_TYPES.SET_SHOP_ITEMS:
            return {
                ...state,
                shopItems: payload
            }
        case SHOP_ACTION_TYPES.FILTER_SHOP_ITEMS:
            return {
                ...state,
                shopFilter: payload
            }
        default:
            return state
    }
}