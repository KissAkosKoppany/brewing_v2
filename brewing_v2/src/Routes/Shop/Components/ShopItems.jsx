import React from 'react'
import ShopItem from './ShopItem'

const ShopItems = ({ beers }) => {

  return (
    <div className='shop-items-container'>
      {
        beers?.map(beer => (
          <ShopItem beer={beer} key={beer.name} />
        ))
      }
    </div>
  )
}

export default ShopItems