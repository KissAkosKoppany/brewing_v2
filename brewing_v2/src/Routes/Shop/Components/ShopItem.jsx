import React from 'react'

const ShopItem = () => {
  return (
    <div className='shop-item-card'>
        <div className='card-image-container'>
            <img src="images/neko.webp" alt="neko" />
        </div>
        <div className='shop-item-card-description'>
            <h1>Beer name</h1>
            <p>Beer description</p>
        </div>
        <div className='shop-item-card-price'>
            <p>Alc.</p>
            <p>Price</p>
        </div>
    </div>
  )
}

export default ShopItem