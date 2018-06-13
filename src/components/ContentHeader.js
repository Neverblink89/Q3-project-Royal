import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

class ContentHeader extends Component {

  state = {
    song_title: ''
  }

  render () {

                let songs = 0;
                let cartQuantity = this.props ? this.props.songs.filter(item => item.inCart === true ? songs++ : null) : ""
                console.log(songs)
    return (

      <header className='content-header'>
        <div className='search-row'>
          <div className="smaller"><input className='individual-search' type='text' placeholder="  Search..."/></div>
          <div className='top-user-container'>
            <div className='top-user-picture'>
              <img className="user-image" src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/12115518_10156654033600131_6065594766176124165_n.jpg?_nc_cat=0&oh=30ad6b37b46287e60ef5f97b7bb30f8a&oe=5BC01270"  />
            </div>
            <div className='user-name-container'>
              Jordon Frank
            <a href="/checkout"><span  className='logout'><i class="fas fa-cart-arrow-down">{songs}</i></span></a>
            </div>
          </div>
        </div>
        <div className="choices-container">
          <h1>Top Albums</h1>
          <hr/>
        </div>
      </header>

    )
  }
}
const mapStateToProps = state => ({
  songs: state.songs
})
export default connect(mapStateToProps)(ContentHeader)
