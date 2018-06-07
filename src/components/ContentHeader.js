import React, { Component } from 'react'
import AlbumsHeader from './AlbumsHeader'


class ContentHeader extends Component {

  state = {
    song_title: ''
  }

  render () {

    return (

      <header className='content-header'>
        <div className='search-row'>
          <input className='search' type='text' placeholder="  Search..."/>
          <div className='top-user-container'>
            <div className='top-user-picture'>
              <img className="user-image" src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/12115518_10156654033600131_6065594766176124165_n.jpg?_nc_cat=0&oh=30ad6b37b46287e60ef5f97b7bb30f8a&oe=5BC01270"  />
            </div>
            <div className='user-name-container'>
              Jordon Frank
              <span className='logout'><i class="fas fa-cart-arrow-down"> 0</i> </span>
            </div>
          </div>
        </div>

        <AlbumsHeader />
      </header>

    )
  }
}
export default ContentHeader
