import { BREWING_ACTION_TYPES } from './brewing.type'

const INITIAL_STATE = {
    brewingsList: [],
}

export const brewingReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case BREWING_ACTION_TYPES.SET_BREWINGS_LIST:
            return {
                ...state,
                brewingsList: payload
            }
        default:
            return state
    }
}