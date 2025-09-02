import { useCallback, useEffect } from "react";
import { httpGetBrewingsList } from "./requests";
import { useDispatch } from "react-redux"
import { setBrewingsList } from '../store/brewing/brewing.action'

export const useLoadBrewings = () => {
    const dispatch = useDispatch()

    const getAllBrewings = useCallback(async() => {
        const allBrewings = await httpGetBrewingsList()
        dispatch(setBrewingsList(allBrewings))
    }, [dispatch])

    useEffect(() => {
        getAllBrewings()
    }, [getAllBrewings])
}