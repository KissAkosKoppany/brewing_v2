import React from 'react'

const CartSummary = () => {
  return (
    <div className='cart-summary-container'>
        <h3>Order summary</h3>
        <div className='cart-summary-info-container'>
            <div className="cart-summary-info">
                <p>Products</p>
                <p>456,45 RON</p>
            </div>
            <div className="cart-summary-info">
                <p>Delivery cost</p>
                <p>10 RON</p>
            </div>
            <div className="cart-summary-info">
                <p>Total</p>
                <p>466,45 RON</p>
            </div>
        </div>
        <button>Go to checkout</button>
    </div>
  )
}

export default CartSummary