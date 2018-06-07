import React from 'react'
import ArtistAlbumSongs from './ArtistAlbumSongs'
import { connect } from 'react-redux'


class ArtistPage extends React.Component {





  render(){

    console.log('props in songs',this.props.individual )
    let individualAlbum = this.props.individual.map(item => <ArtistAlbumSongs key={item.id} id={item.id} songs={item}/>)

  return (


    <div className="content-container">
    <header className='content-header-individual'>
      <div className='search-row'>
        <input className='individual-search' type='text' placeholder=" Search..."/>
        <div className='top-user-container'>
          <div className='top-user-picture'>
            <img className="user-image" alt="nothing"src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/12115518_10156654033600131_6065594766176124165_n.jpg?_nc_cat=0&oh=30ad6b37b46287e60ef5f97b7bb30f8a&oe=5BC01270"  />
          </div>
          <div className='user-name-container'>
            Jordon Frank
            <span className='logout'><i class="fas fa-cart-arrow-down"> 0</i> </span>

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

  )
}
}
const mapStateToProps = state => ({
    songs: state.songs,
    artists: state.artists,
    individual: state.individual
})


export default connect(mapStateToProps)(ArtistPage)
