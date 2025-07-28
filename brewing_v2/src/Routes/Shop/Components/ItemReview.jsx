import React from 'react'
import { MdOutlineStarBorder } from "react-icons/md";

const ItemReview = ({ rating, handleModalOpen, selectedBeer }) => {

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
            <div className='graph-element'>
              <p>5<MdOutlineStarBorder /></p>
              <progress value="1" max="2">
                {/* add pseudo elements */}
              </progress>
              <p>1</p>
            </div>
            <div className='graph-element'>
              <p>4<MdOutlineStarBorder /></p>
              <progress value="1" max="2"></progress>
              <p>1</p>
            </div>
            <div className='graph-element'>
              <p>3<MdOutlineStarBorder /></p>
              <progress value="0" max="0"></progress>
              <p>0</p>
            </div>
            <div className='graph-element'>
              <p>2<MdOutlineStarBorder /></p>
              <progress value="0" max="0"></progress>
              <p>0</p>
            </div>
            <div className='graph-element'>
              <p>1<MdOutlineStarBorder /></p>
              <progress value="0" max="0"></progress>
              <p>0</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ItemReview