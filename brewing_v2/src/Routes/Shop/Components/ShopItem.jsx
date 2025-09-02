import React from 'react'
import { Link } from 'react-router'

const ShopItem = ({ beer }) => {

  const discountedPrice = beer.price * (100-beer.discount) / 100;

  const priceInt = (price) => price.toString().split(".")[0];

  const priceFloat = (price) => price.toString().split(".")[1];

  return (
    <Link to={beer.name} className='link'>
    <div className='shop-item-card'>
        <div className='card-image-container'>
            <img src={beer.images[0]} alt="beer cover" />
        </div>
        <div className='shop-item-card-description'>
            <h1>{beer.name}</h1>
            <p>{beer.description}</p>
        </div>
        <div className='shop-item-card-price'>
            <p>ABV: {beer.alcohol}%</p>
            <p>{priceInt(discountedPrice)},<span>{priceFloat(discountedPrice)}</span> RON</p>
        </div>
    </div>
    </Link>
  )
}

export default ShopItem