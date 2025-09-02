import { BREWING_ACTION_TYPES } from "./brewing.type"

import { createAction } from "../../utils/reducers/reducer.utils";

export const setBrewingsList = (items) => {
    return createAction(BREWING_ACTION_TYPES.SET_BREWINGS_LIST, items)
}