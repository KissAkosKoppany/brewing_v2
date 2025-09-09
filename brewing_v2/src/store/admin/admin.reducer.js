import { ADMIN_ACTION_TYPES } from "./admin.type";

const INITIAL_STATE = {
    admin: false,
}

export const adminReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case ADMIN_ACTION_TYPES.SET_ADMIN:
            return {
                ...state,
                admin: payload
            }
        default:
            return state
    }
}