import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './root_reducer';

export const store = configureStore({
    reducer: {
        rootReducer: rootReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})