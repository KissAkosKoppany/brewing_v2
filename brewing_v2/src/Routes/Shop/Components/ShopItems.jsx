import React from 'react'
import ShopItem from './ShopItem'
import Spinner from '../../../GeneralComponents/Spinner'

const ShopItems = ({ beers }) => {

  return (
    <div className='shop-items-container'>
      {
        beers?.map(beer => (
          
            beers ?
              <ShopItem beer={beer} key={beer.name} />
            :
              <Spinner key={beer.name} />
          
        ))
      }
    </div>
  )
}

export default ShopItems