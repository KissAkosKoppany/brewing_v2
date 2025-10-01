import React from 'react'

const ReviewComments = ({ review }) => {
  return (
    <div className='review-comment'>
        <h3>{review.custom_name} <span>{review.date.split('T')[0]}</span></h3>
        <div className="stars comment" style={{"--rating": review.rating}}></div>
        <p>{review.comment}</p>
    </div>
  )
}

export default ReviewComments