import React from 'react'
import { MdOutlineStarBorder } from "react-icons/md";
import ReviewComments from './ReviewComments';

const ItemReview = ({ handleModalOpen, selectedBeer }) => {

  const getAvarageRating = (arr) => {
    if (arr) {
      const sum = arr.reduce((acc, review) => {
        acc += review.rating;
        return acc;
      }, 0);
      return sum/arr.length;
    } else return 0
  }

  const getStarsCount = (arr, stars) => {
    if (arr) {
      const sum = arr.reduce((acc, review) => {
        if (review.rating === stars) {
          acc += 1
        } 
        return acc
      }, 0)
      return sum
    } else return 0
  }

  const rating = getAvarageRating(selectedBeer?.reviews);

  const reviewsCount = selectedBeer?.reviews?.length;

  const fiveStarCount = getStarsCount(selectedBeer?.reviews, 5)
  const fourStarCount = getStarsCount(selectedBeer?.reviews, 4)
  const threeStarCount = getStarsCount(selectedBeer?.reviews, 3)
  const twoStarCount = getStarsCount(selectedBeer?.reviews, 2)
  const oneStarCount = getStarsCount(selectedBeer?.reviews, 1)

  return (
    <div className='shop-item-page-review-container'>
        <h2>Reviews</h2>
        <div className='item-page-review'>
          <div className='item-page-review-stars'>
            <div className="stars" style={{"--rating": rating}}></div>
            {
              reviewsCount && rating
              ?
              <p>{rating} from {reviewsCount} reviews</p>
              :
              <p>No reviews yet!</p>
            }
            <button onClick={() => handleModalOpen()}>Add Review</button>
          </div>
          <div className='item-page-review-graph'>
            <div className='graph-element'>
              <p>5<MdOutlineStarBorder /></p>
              <progress value={fiveStarCount} max={reviewsCount}></progress>
              <p>{fiveStarCount}</p>
            </div>
            <div className='graph-element'>
              <p>4<MdOutlineStarBorder /></p>
              <progress value={fourStarCount} max={reviewsCount}></progress>
              <p>{fourStarCount}</p>
            </div>
            <div className='graph-element'>
              <p>3<MdOutlineStarBorder /></p>
              <progress value={threeStarCount} max={reviewsCount}></progress>
              <p>{threeStarCount}</p>
            </div>
            <div className='graph-element'>
              <p>2<MdOutlineStarBorder /></p>
              <progress value={twoStarCount} max={reviewsCount}></progress>
              <p>{twoStarCount}</p>
            </div>
            <div className='graph-element'>
              <p>1<MdOutlineStarBorder /></p>
              <progress value={oneStarCount} max={reviewsCount}></progress>
              <p>{oneStarCount}</p>
            </div>
          </div>
        </div>
        <div className='review-comments-container'>
          {
            reviewsCount ?
            selectedBeer?.reviews.map(review => (
              <ReviewComments key={review.email} review={review} />
            ))
            :
            null
          }
        </div>
    </div>
  )
}

export default ItemReview