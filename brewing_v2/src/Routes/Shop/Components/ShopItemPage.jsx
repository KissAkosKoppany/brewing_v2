import React, { lazy, Suspense, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useLoadSelectedBeer } from '../../../hooks/useLoadSelectedBeer'
import { useSelector } from 'react-redux'
import ImageSlider from './ImageSlider'
// import ItemReview from './ItemReview'
import ItemReviewModal from './ItemReviewModal'
import Spinner from '../../../GeneralComponents/Spinner'
import { GiBeerBottle } from "react-icons/gi";
// import { BsFillCartPlusFill } from "react-icons/bs";

const ItemReview = lazy(() => import("./ItemReview"))

const ShopItemPage = () => {

  const [openModal, setOpenModal] = useState(false)

  const [selectedReview, setSelectedReview] = useState([])

  const allReviews = useSelector(state => state.rootReducer.reviews.allReviews)

  const { id } = useParams()
  
  useLoadSelectedBeer(id)

  const selectedBeer = useSelector(state => state.rootReducer.beer.selectedBeer)

  useEffect(() => {
    if (allReviews) {
      const review = allReviews.filter(rev => rev?.name === selectedBeer?.name)
      setSelectedReview(review)
    }
  }, [selectedBeer])

  const images = selectedBeer?.images

  const handleModalOpen = () => {
    setOpenModal(true)
  }

  const handleModalClose = () => {
    setOpenModal(false)
  }

  // const originalPrice = selectedBeer?.price;

  // const discountedPrice = originalPrice * (100-selectedBeer?.discount) / 100;

  // const priceInt = (price) => price?.toString().split(".")[0];

  // const priceFloat = (price) => price?.toString().split(".")[1];

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
              {/* <p>{priceInt(discountedPrice.toFixed(2))},<span>{priceFloat(discountedPrice.toFixed(2))}</span> RON</p> */}
              <p>{selectedBeer?.stock} <span><GiBeerBottle /></span></p>
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
      <Suspense fallback={<Spinner />}>
        <>
          <ItemReview handleModalOpen={handleModalOpen} selectedReview={selectedReview} selectedBeer={selectedBeer} />
          {
            openModal ?
            <ItemReviewModal handleModalClose={handleModalClose} selectedBeer={selectedBeer} />
            :
            null
          }
        </>
      </Suspense>
    </div>
  )
}

export default ShopItemPage