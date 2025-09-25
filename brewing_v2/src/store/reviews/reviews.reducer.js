import { REVIEWS_ACTION_TYPES } from "./reviews.type";

const INITIAL_STATE = {
    allReviews: null,
    selectedReview: null,
}

export const reviewsReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case REVIEWS_ACTION_TYPES.SET_ALL_REVIEWS:
            return {
                ...state,
                allReviews: payload
            }
        case REVIEWS_ACTION_TYPES.SET_SELECTED_REVIEW:
            return {
                ...state,
                selectedReview: payload
            }
        default:
            return state
    }
}