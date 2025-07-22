import React from 'react'

const ItemReview = ({ rating, handleModalOpen}) => {

  return (
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
  )
}

export default ItemReview