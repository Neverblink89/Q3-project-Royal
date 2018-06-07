import React from 'react'
import CartList from './CartList'

class Cart extends React.Component {

  render() {
    return (
    <div className="cart-body-container">
      <div className="cart-outline">
        <CartList />
      </div>
    </div>
  )
  }
}
export default Cart
