import React from 'react'

const ShopItems = () => {
  return (
    <div className='shop-items-container'>
        <div className='shop-item-card'>
            <div className='card-image-container'>
                <img src="images/neko.webp" alt="neko" />
            </div>
            <h1>Beer name</h1>
            <p>Beer description</p>
        </div>
    </div>
  )
}

export default ShopItems