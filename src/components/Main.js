import React, { Component } from 'react'
import ContentHeader from './ContentHeader'
import ArtistsMain from './ArtistsMain'
import { connect } from 'react-redux'
import SideNav from './SideNav'
class Main extends Component {

  state={
    filterPhrase:''
  }



  render () {



    let songs = 0;
    let cartQuantity = this.props ? this.props.songs.filter(item => item.inCart === true ? songs++ : null) : ""

      console.log("props in Main", this.props.artists);
    let listOfAlbums = this.props.artists.length>0?this.props.artists.filter(item => item.artist_name.includes(this.state.filterPhrase))
    .map((album, index) => <ArtistsMain key={index} album={album}/>): ""

    return (
      <div>
        <SideNav />
      <div className="content-container">
        <ContentHeader />
          <div className="artist-main-container">
            <div className="artist-filter-container">
              <i class="fas fa-search"></i>
              <input placeholder="Filter" value={this.state.filterPhrase}
              onChange={(e) => this.setState({filterPhrase: e.target.value})}
               className="filter-choices"  />
              <h2>Sorted By</h2>
              <select>
                <option>Name</option>
              </select>
              <hr/>
            </div>
          </div>
          <div className="artist-circles-container">
          {listOfAlbums}
          </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    songs: state.songs,
    artists: state.artists
})


export default connect(mapStateToProps)(Main)
