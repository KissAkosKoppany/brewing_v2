import React, { useCallback, useEffect, useState } from 'react'
import ShopItem from './ShopItem'
import { useSelector } from 'react-redux'
import { useLoadBeers } from '../../../hooks/useLoadBeers'

const ShopItems = () => {
  
  useLoadBeers()
  
  const beers = useSelector(state => state.rootReducer.beer.allBeers)
  const filter = useSelector(state => state.rootReducer.beer.beerFilter)
  
  const [allBeers, setAllBeers] = useState(beers)

  
  const handleBeerFilter = () => {
    setAllBeers(beers => beers?.filter(beer => beer.type || "all" === filter))
  }
  
  const handleBeers = useCallback(() => {
    handleBeerFilter()
  }, [filter])
  
  useEffect(() => {
    handleBeers()
  }, [handleBeers])
  
  console.log(filter)
  console.log(allBeers)

  return (
    <div className='shop-items-container'>
      {
        allBeers?.map(beer => (
          <ShopItem beer={beer} key={beer.name} />
        ))
      }
    </div>
  )
}

export default ShopItems