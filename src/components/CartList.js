import React, { Component } from 'react'
import CartListItem from './CartListItem'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class CartList extends Component {


  render () {

    console.log(this.props.songs)
    let cartItems = this.props.songs
    .filter(item => item.inCart)
    .map(song => <CartListItem key={song.id} item={song} />)
    //converting price into a string with a $ concatenated to the front
    let price = this.props.songs ? this.props.songs.filter(item => item.inCart).map(item => item.price.slice(1)).reduce((acc, item)=> acc + parseFloat(item),0).toFixed(2) : null
    const tax = (price * .078).toFixed(2)
    const grandTotal = Number(price) + Number(tax)
    const grand = (grandTotal*100).toFixed(2)/(100)

    return (
        <div className="table-wrapper">
          <table  className="table-container">
            <thead className="thead">
              <tr className="trow">
                <th  className="thead-row-song">TITLE</th>
                <th className="thead-row-qty">QTY</th>
                <th className="thead-row-delete">Delete</th>
                <th className="thead-row-price">PRICE</th>
              </tr>
            </thead>
            {cartItems}
          </table>
         <div className="subtotal">
          <div className="sub">Subtotal</div>
          <div className="sub-t">${price}</div>
        </div>
        <div className="total-tax">
          <div className="total">Tax(AZ)</div>
          <div className="total-t">${tax}</div>
        </div>
        <div className="grandtotal">
          <div className="grand">
            <b>GrandTotal</b>
          </div>
          <div className="total-g">${grand}</div>
        </div>
        <Link to='/token'><button className="checkout-btn">Checkout</button></Link>
        </div>
    )
  }
}


const mapStateToProps = state => ({
  songs: state.songs
})

export default connect(mapStateToProps)(CartList)
