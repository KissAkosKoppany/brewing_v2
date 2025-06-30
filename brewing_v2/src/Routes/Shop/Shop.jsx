import React, { useEffect, useState } from 'react'
import './Shop.style.css'
import ShopFilters from './Components/ShopFilters'
import ShopItems from './Components/ShopItems'
import { beers } from '../../Beers.js'

const Shop = () => {

  const [beerFilter, setBeerFilter] = useState("all")
  
  useEffect(() => {
    beers.filter(beer => beer.type || "all" === beerFilter)
  }, [beerFilter])

  const applyBeerFilter = (filter) => {
    setBeerFilter(filter)
  }

  return (
    <div className='shop-container'>
        <ShopFilters applyBeerFilter={applyBeerFilter} />
        <ShopItems beers={beers} />
    </div>
  )
}

export default Shop