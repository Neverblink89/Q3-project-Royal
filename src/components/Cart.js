import React from 'react'
import CartList from './CartList'
import { connect } from 'react-redux'
import { closeCart } from '../redux/actions/songs'
import { Link } from 'react-router-dom'


class Cart extends React.Component {



  render() {



    return (
        <div className="background-container">
          <div className="checkout-wrapper">
             <div className="logo-wrapper">
             </div>
                <div className="text">
                  <h1> Thank you, Jordon</h1>
                </div>
              <CartList/>
            </div>
          </div>
  )
  }
}


export default Cart
