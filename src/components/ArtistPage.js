import React from 'react'
import ArtistAlbumSongs from './ArtistAlbumSongs'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import SideNav from "./SideNav"
import Cart from "./Cart"

class ArtistPage extends React.Component {

state={
  showCart:false
}



  render(){

    let songs = 0;
    //if props exist, filter the songs that have a true inCart attribute and display next to the cart icon.
    let cartQuantity = this.props ? this.props.songs.filter(item => item.inCart === true ? songs++ : null) : ""
    console.log(songs)
//passing songs to the child component ArtistAlbumSongs
    let individualAlbum = this.props.individual.map(item => <ArtistAlbumSongs key={item.id} id={item.id} songs={item}/>)

  return (

    <div className="wrapper">
      {this.state.showCart ? <Cart /> : null}
        <SideNav/>
          <div className="content-container">
            <header className='content-header-individual'>
              <div className='search-row'>
                <input className='individual-search'  placeholder=" Search..."/>
                  <div className='top-user-container'>
                    <div className='top-user-picture'>
                      <img className="user-image" alt="nothing"src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/12115518_10156654033600131_6065594766176124165_n.jpg?_nc_cat=0&oh=30ad6b37b46287e60ef5f97b7bb30f8a&oe=5BC01270"  />
                    </div>
                  <div className='user-name-container'>
                Jordon Frank
              <Link to="/checkout"><span onClick={()=> this.setState({showCart:!this.state.showCart})} className='logout'><i class="fas fa-cart-arrow-down">{songs}</i> </span></Link>
          </div>
        </div>
      </div>
        <div className="individual-artist-container">
          <div className="artist-image-individual">
            <img className="artist-image-header" alt="nothing" src={this.props.individual[0] ? this.props.individual[0].img_url : ""}/>
              </div>
               <h1 className='large-text'>{this.props.individual[0] ? this.props.individual[0].artist_name : ''}</h1>
                 </div>
                  </header>
                  <br/>
                  {individualAlbum}
                    </div>
                      </div>

  )
}
}


const mapStateToProps = state => ({
    songs: state.songs,
    artists: state.artists,
    individual: state.individual
})


export default connect(mapStateToProps)(ArtistPage)
