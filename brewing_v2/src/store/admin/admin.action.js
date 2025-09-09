import { ADMIN_ACTION_TYPES } from './admin.type'

import { createAction } from "../../utils/reducers/reducer.utils";

export const setAdmin = (bool) => {
    return createAction(ADMIN_ACTION_TYPES.SET_ADMIN, bool)
}