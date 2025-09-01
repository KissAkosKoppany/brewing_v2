import React from 'react'

const CartItem = () => {
  return (
    <div className='cart-item-container'>
        <div className='cart-item-info'>
            <div className='cart-item-image'>
              <img src="images/beer.jpg" alt="beer" />
            </div>
            <div className='cart-item-name'>
              <p>Beer name</p>
              <p>ABV: 5%</p>
            </div>
        </div>
        <div className='cart-item-price'>
            <div className='cart-item-quantity'>
                <div className='cart-item-quantity-counter'>
                    <button>-</button>
                    <p>0</p>
                    <button>+</button>
                </div>
            </div>
            <div className='cart-item-total'>
                <p>200 RON</p>
            </div>
        </div>
    </div>
  )
}

export default CartItem