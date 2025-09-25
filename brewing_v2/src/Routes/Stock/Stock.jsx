import React from "react"
import './Stock.style.css'
import { GiBeerBottle } from "react-icons/gi";
import { IoIosStar } from "react-icons/io";
import { useSelector } from "react-redux";
import Spinner from "../../GeneralComponents/Spinner";

const Stock = () => {

  const beers = useSelector(state => state.rootReducer.beer.allBeers)
  const allReviews = useSelector(state => state.rootReducer.reviews.allReviews)

  const getAvarageRating = (beer) => {
    if(allReviews) {
      const selectedReview = allReviews?.filter(review => review?.name === beer?.name)
      // console.log('if allrewview', selectedReview, beer.name)
      if (selectedReview.length) {
        const sum = selectedReview.reduce((acc, review) => {
          acc = acc + Number(review.rating);
          return acc;
        }, 0);
        return sum/selectedReview.length;
      } else {
         return 0
      }
    } else return 0

  }

  const rating = (beer) => getAvarageRating(beer).toFixed(1)

  return (
    
    <div className="stock">
      {
        beers ?
          beers.map(beer => {
            return (
              <div key={beer.name} className="stock-item">
                <div className="stock-info">
                  <div className="stock-image">
                    <img src={beer.images[0]} alt="beer" />
                  </div>
                  <div className="stock-title">
                    <h2>{beer.name}</h2>
                    <p>Rating: {rating(beer)} <span><IoIosStar /></span></p>
                  </div>
                </div>
                <div className="stock-value">
                  <h2>Stock</h2>
                  <p><span><GiBeerBottle /></span> {beer.stock}</p>
                </div>
            </div>
            )
        })
        :
        <Spinner />
      }
    </div>
    
  )
}

export default Stock