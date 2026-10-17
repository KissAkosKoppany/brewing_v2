import { NAVIGATION_ACTION_TYPES } from "./navigation.type";

import { createAction } from "../../utils/reducers/reducer.utils";

export const setActiveLink = (item) => {
    return createAction(NAVIGATION_ACTION_TYPES.SET_AVTIVE_LINK, item)
}