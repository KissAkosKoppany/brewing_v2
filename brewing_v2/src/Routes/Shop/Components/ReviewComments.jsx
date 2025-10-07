import React from 'react'
import { httpDeleteReview } from '../../../hooks/requests'
import { useSelector } from 'react-redux'

const ReviewComments = ({ review }) => {

  const isAdmin = useSelector(state => state.rootReducer.admin.admin)

  const deleteReview = async(id) => {
    await httpDeleteReview(id)
  }

  return (
    <div className='review-comment'>
        <h3>{review.custom_name} <span>{review.date.split('T')[0]}</span></h3>
        <div className="stars comment" style={{"--rating": review.rating}}></div>
        <p>{review.comment}</p>
        {
          isAdmin ?
            <button onClick={() => deleteReview(review.id)}>Delete</button>
          :
            null
        }
    </div>
  )
}

export default ReviewComments