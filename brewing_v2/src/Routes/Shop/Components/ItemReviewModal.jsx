import React from 'react'

const ItemReviewModal = ({ handleModalClose }) => {
  return (
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
  )
}

export default ItemReviewModal