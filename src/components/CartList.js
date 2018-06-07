import React, { Component } from 'react'
import CartListItem from './CartListItem'
import { connect } from 'react-redux'


class CartList extends Component {


  render () {
    console.log("this",this.props)


    return (

      <div className="cart-container">
        <div className="cart-title">
          <h2>Checkout</h2>
        </div>
        <div className="column-labels">
          <label className="song-image"></label>
          <label className="song-title">TITLE</label>
          <label className="song-quanitity">QTY</label>
          <label className="song-price">PRICE</label>
        </div>
        <div className="cart-list">
          <CartListItem />
        </div>
      </div>

    )
  }
}


const mapStateToProps = state => ({
  songs: state.songs
})

export default connect(mapStateToProps)(CartList)
