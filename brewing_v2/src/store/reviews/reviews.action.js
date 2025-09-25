import { REVIEWS_ACTION_TYPES } from "./reviews.type";

import { createAction } from "../../utils/reducers/reducer.utils";

export const setAllReviews = (items) => {
    return createAction(REVIEWS_ACTION_TYPES.SET_ALL_REVIEWS, items)
}

export const setSelectedReview = (item) => {
    return createAction(REVIEWS_ACTION_TYPES.SET_SELECTED_REVIEW, item)
}