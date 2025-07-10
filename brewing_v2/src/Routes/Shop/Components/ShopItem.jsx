import React from 'react'
import { Link } from 'react-router'

const ShopItem = ({ beer }) => {

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
            <p>{beer.alcohol}</p>
            <p>{beer.price}</p>
        </div>
    </div>
    </Link>
  )
}

export default ShopItem