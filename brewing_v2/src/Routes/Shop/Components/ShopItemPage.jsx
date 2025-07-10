import React from 'react'
import { useParams } from 'react-router'
import { useLoadSelectedBeer } from '../../../hooks/useLoadSelectedBeer'
import { useSelector } from 'react-redux'

const ShopItemPage = () => {

  const { id } = useParams()
  
  useLoadSelectedBeer(id)

  const selectedBeer = useSelector(state => state.rootReducer.beer.selectedBeer)

  return (
    <div className='shop-item-page-container'>
      ShopItemPage
      {selectedBeer?.name}
    </div>
  )
}

export default ShopItemPage