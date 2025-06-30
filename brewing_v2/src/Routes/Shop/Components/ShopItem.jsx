import React from 'react'

const ShopItem = ({beer}) => {
  return (
    <div className='shop-item-card'>
        <div className='card-image-container'>
            <img src={beer.image} alt="beer cover" />
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
  )
}

export default ShopItem