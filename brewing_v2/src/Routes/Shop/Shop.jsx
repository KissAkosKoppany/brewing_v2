import React, { useEffect, useState } from 'react'
import './Shop.style.css'
import ShopFilters from './Components/ShopFilters'
import ShopItems from './Components/ShopItems'
import { beers } from '../../Beers.js'

const Shop = () => {

  return (
    <div className='shop-container'>
        <ShopFilters />
        <ShopItems beers={beers} />
    </div>
  )
}

export default Shop