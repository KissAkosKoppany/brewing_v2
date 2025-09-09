import React, { useState } from 'react'
import { useParams } from 'react-router'
import { useLoadSelectedBeer } from '../../../hooks/useLoadSelectedBeer'
import { useSelector } from 'react-redux'
import ImageSlider from './ImageSlider'
import ItemReview from './ItemReview'
import ItemReviewModal from './ItemReviewModal'
import { BsFillCartPlusFill } from "react-icons/bs";

const ShopItemPage = () => {

  const [openModal, setOpenModal] = useState(false)

  const { id } = useParams()
  
  useLoadSelectedBeer(id)

  const selectedBeer = useSelector(state => state.rootReducer.beer.selectedBeer)

  const images = selectedBeer?.images

  const handleModalOpen = () => {
    setOpenModal(true)
  }

  const handleModalClose = () => {
    setOpenModal(false)
  }

  const originalPrice = selectedBeer?.price;

  const discountedPrice = originalPrice * (100-selectedBeer?.discount) / 100;

  const priceInt = (price) => price?.toString().split(".")[0];

  const priceFloat = (price) => price?.toString().split(".")[1];

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
          <div className='item-page-beer-info'>
            <h2>Charateristics</h2>
            <ul>
              <li>
                <p>Type:</p>
                <p>{selectedBeer?.type}</p>
              </li>
              <li>
                <p>Alcohol:</p>
                <p>{selectedBeer?.alcohol}%</p>
              </li>
              <li>
                <p>IBU:</p>
                <p>{selectedBeer?.ibu}</p>
              </li>
              <li>
                <p>Litreage:</p>
                <p>{selectedBeer?.litrage} ml</p>
              </li>
            </ul>
          </div>
          <div className='item-page-price-box'>
            <div className={`item-page-price ${selectedBeer?.stock > 0 ? 'on-stock' : 'out-of-stock'}`}>
              <p>{priceInt(discountedPrice.toFixed(2))},<span>{priceFloat(discountedPrice.toFixed(2))}</span> RON</p>
              {/* {
                selectedBeer?.discount === 0
                ?
                <p>{priceInt(discountedPrice.toFixed(2))},<span>{priceFloat(discountedPrice.toFixed(2))}</span> RON</p>
                :
                <div className='discounted-price'>
                  <p>{priceInt(originalPrice)},<span>{priceFloat(originalPrice)}</span> RON</p>
                  <p>{priceInt(discountedPrice.toFixed(2))},<span>{priceFloat(discountedPrice.toFixed(2))}</span> RON</p>
                </div>
              } */}
              <p title={selectedBeer?.stock}>
                {selectedBeer?.stock > 0 ? "In stock" : "Out of stock"}
              </p>
            </div>
            {/* <div className='item-page-cart-button'>
              <button><BsFillCartPlusFill /></button>
            </div> */}
          </div>
        </div>
      </div>
      <ItemReview handleModalOpen={handleModalOpen} selectedBeer={selectedBeer} />
      {
        openModal ?
        <ItemReviewModal handleModalClose={handleModalClose} />
        :
        null
      }
    </div>
  )
}

export default ShopItemPage