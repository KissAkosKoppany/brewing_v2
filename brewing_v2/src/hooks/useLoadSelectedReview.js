import { useCallback, useEffect } from "react"
import { useDispatch } from "react-redux"
import { httpGetReviews } from "./requests"
import { setSelectedReview } from "../store/reviews/reviews.action"

export const useLoadSelectedReview = (name) => {
    const dispatch = useDispatch()

    const getSelectedReview = useCallback(async() => {
        const allReviews = await httpGetReviews()
        const selectedReview = allReviews.filter(review => review.name === name)
        dispatch(setSelectedReview(selectedReview))
    }, [dispatch])

    useEffect(() => {
        getSelectedReview()
    }, [getSelectedReview])
}