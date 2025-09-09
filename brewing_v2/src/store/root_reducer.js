import { combineReducers } from "redux";

import { beerReducer } from "./beer/beer.reducer";
import { brewingReducer } from "./brewing/brewing.reducer";
import { adminReducer } from "./admin/admin.reducer";

export const rootReducer = combineReducers({
    beer: beerReducer,
    brewing: brewingReducer,
    admin: adminReducer,
})