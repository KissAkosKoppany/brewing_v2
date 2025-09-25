import { useCallback, useEffect } from "react"
import { useDispatch } from "react-redux"
import { httpGetReviews } from "./requests"
import { setAllReviews } from "../store/reviews/reviews.action"

export const useLoadReviews = () => {
    const dispatch = useDispatch()

    const getAllReviews = useCallback(async() => {
        const allReviews = await httpGetReviews()
        dispatch(setAllReviews(allReviews))
    }, [dispatch])

    useEffect(() => {
        getAllReviews()
    }, [getAllReviews])
}