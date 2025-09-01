import React from 'react'
import './Cart.style.css'
import CartItem from './Components/CartItem'
import CartSummary from './Components/CartSummary'

const Cart = () => {
    
  return (
    <div className='cart-container'>
        <h2>
          Your shopping cart
        </h2>
        <div className='cart-sections'>
          <div className='cart-section items'>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <div className='cart-section summary'>
            <CartSummary />
          </div>
        </div>
    </div>
  )
}

export default Cart