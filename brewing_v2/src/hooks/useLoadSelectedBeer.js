import { useCallback, useEffect } from "react";
import { httpGetAllBeers } from "./requests";
import { useDispatch } from "react-redux";
import { setSelectedBeer } from "../store/beer/beer.action";

export const useLoadSelectedBeer = (id) => {

    const dispatch = useDispatch()
   
   const getSelectedBeer = useCallback(async() => {
           const allBeers = await httpGetAllBeers()
           const selectedBeer = allBeers.filter(beer => beer.name === id)
           dispatch(setSelectedBeer(selectedBeer[0]))
       }, [dispatch])
    
       useEffect(() => {
           getSelectedBeer()
       }, [getSelectedBeer])
}