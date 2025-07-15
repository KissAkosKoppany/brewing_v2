import React, { useState } from 'react'
import { useParams } from 'react-router'
import { useLoadSelectedBeer } from '../../../hooks/useLoadSelectedBeer'
import { useSelector } from 'react-redux'
import ImageSlider from './ImageSlider'

const ShopItemPage = () => {

  const [openModal, setOpenModal] = useState(false)

  const { id } = useParams()
  
  useLoadSelectedBeer(id)

  const selectedBeer = useSelector(state => state.rootReducer.beer.selectedBeer)

  const images = selectedBeer?.images

  const rating = 2.4;

  const handleModalOpen = () => {
    setOpenModal(true)
  }

  const handleModalClose = () => {
    setOpenModal(false)
  }

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
                <p>{selectedBeer?.alcohol}</p>
              </li>
              <li>
                <p>IBU:</p>
                <p>{selectedBeer?.ibu}</p>
              </li>
              <li>
                <p>Litreage:</p>
                <p>0,33l</p>
              </li>
            </ul>
          </div>
          <div className='item-page-price-box'>
            <div className={`item-page-price ${selectedBeer?.stock > 0 ? 'on-stock' : 'out-of-stock'}`}>
              <p>{selectedBeer?.price} RON</p>
              <p title={selectedBeer?.stock}>
                {selectedBeer?.stock > 0 ? "In stock" : "Out of stock"}
              </p>
            </div>
            <div className='item-page-cart-button'>
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className='shop-item-page-review-container'>
        <h2>Reviews</h2>
        <div className='item-page-review'>
          <div className='item-page-review-stars'>
            <div className="stars" style={{"--rating": rating}}></div>
            <p>{rating} from 13 reviews</p>
            <button onClick={() => handleModalOpen()}>Add Review</button>
          </div>
          <div className='item-page-review-graph'>
            graph
          </div>
        </div>
      </div>
      {
        openModal ?
          <div className='review-modal'>
            <div onClick={() => handleModalClose()} className='overlay'></div>
            <form className='item-review-from'>
              <h1>Drop Us a Line</h1>
              <div className='star-rating'>
                <input className="radio-input" type="radio" id="star5" name="star-input" value="5" />
                <label className="radio-label" htmlFor="star5" title="5 stars">5 stars</label>
                <input className="radio-input" type="radio" id="star4" name="star-input" value="4" />
                <label className="radio-label" htmlFor="star4" title="4 stars">4 stars</label>

                <input className="radio-input" type="radio" id="star3" name="star-input" value="3" />
                <label className="radio-label" htmlFor="star3" title="3 stars">3 stars</label>

                <input className="radio-input" type="radio" id="star2" name="star-input" value="2" />
                <label className="radio-label" htmlFor="star2" title="2 stars">2 stars</label>

                <input className="radio-input" type="radio" id="star1" name="star-input" value="1" />
                <label className="radio-label" htmlFor="star1" title="1 star">1 star</label>
              </div>
      
              <div className="group">      
                <input type="text" className='item-review-input' name='name' id='name' required />
                <span className="bar"></span>
                <label htmlFor='name' className='item-review-label'>Custom Name</label>
              </div>

              <div className="group">      
                <input type="email" className='item-review-input' name='email' id='email' required />
                <span className="bar"></span>
                <label htmlFor='email' className='item-review-label'>Email</label>
              </div>

              <div className="group">      
                <input type="text" className='item-review-input' name='comment' id='comment' placeholder='' />
                <span className="bar"></span>
                <label htmlFor='comment' className='item-review-label'>Leave a comment</label>
              </div>

              <div className='item-review-submit-buttons'>
                <button onClick={() => handleModalClose()}>Cancel</button>
                <button>Submit</button>
              </div>

            </form>
          </div>
        :
        null
      }
    </div>
  )
}

export default ShopItemPage