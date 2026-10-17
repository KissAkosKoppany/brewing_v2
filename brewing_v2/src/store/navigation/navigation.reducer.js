import { NAVIGATION_ACTION_TYPES } from "./navigation.type";

const INITIAL_STATE = {
    activeLink: null,
}

export const navigationReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case NAVIGATION_ACTION_TYPES.SET_AVTIVE_LINK:
            return {
                ...state,
                allBeers: payload
            }
        default:
            return state
    }
}