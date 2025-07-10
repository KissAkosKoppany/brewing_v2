import React from 'react'
import { useParams } from 'react-router'
import { useLoadSelectedBeer } from '../../../hooks/useLoadSelectedBeer'
import { useSelector } from 'react-redux'
import ImageSlider from './ImageSlider'

const ShopItemPage = () => {

  const { id } = useParams()
  
  useLoadSelectedBeer(id)

  const selectedBeer = useSelector(state => state.rootReducer.beer.selectedBeer)

  const images = selectedBeer?.images

  return (
    <div className='shop-item-page-container'>
      <h1>{selectedBeer?.name}</h1>
      <div className='shop-item-container'>
        <div className='item-page-img-slider-container'>
          <ImageSlider images={images}/>
        </div>
        <div className='item-page-info-container'>
          <div className='item-page-description'>
            <h2>Description</h2>
            <p>{selectedBeer?.description}</p>
          </div>
          <div className='item-page-price-box'>
            hello
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopItemPage