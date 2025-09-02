import { useCallback, useEffect } from "react";
import { httpGetAllBeers } from "./requests";
import { useDispatch } from "react-redux"
import { setAllBeers } from "../store/beer/beer.action";

export const useLoadBeers = () => {
    const dispatch = useDispatch()

    const getAllBeers = useCallback(async() => {
        const allBeers = await httpGetAllBeers()
        console.log('from server', allBeers)
        dispatch(setAllBeers(allBeers))
    }, [dispatch])

    useEffect(() => {
        getAllBeers()
    }, [getAllBeers])
}