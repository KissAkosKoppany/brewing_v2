import React from 'react'
import './Shop.style.css'
import ShopFilters from './Components/ShopFilters'
import ShopItems from './Components/ShopItems'

const Shop = () => {
  return (
    <div className='shop-container'>
        <ShopFilters />
        <ShopItems />
    </div>
  )
}

export default Shop