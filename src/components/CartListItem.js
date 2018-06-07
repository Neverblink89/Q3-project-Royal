import React, { Component } from 'react'



class CartListItem extends Component {


  render () {

    return (
      <div>
        <div className="cart-item-image">x</div>
        <div className="cart-item-title">
          Sexyback
        </div>
        <div className="cart-item-quanitity">
          <input type="number" value="1" min="1"/>
        </div>
        <div className="cart-item-price"></div>
      </div>

    )
  }
}
export default CartListItem
