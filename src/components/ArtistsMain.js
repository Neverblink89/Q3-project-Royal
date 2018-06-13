import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchIndividual } from '../redux/actions/individual'
import { Link } from 'react-router-dom'


  const ArtistsMain = (props) => {
  console.log("props in here",props)
  let id = props.album.id
return (
      <div className="circle-container">
        <div className="artist-circles">
        //fires action that fetches artist id and creates links to each of their respective pages.
          <Link to="/artist"><a onClick={() => props.fetchIndividual(id)} ><img className='artist-image'  alt='blah' src={props.album.album_url}/></a></Link>
            </div>
          <h3>{props.album.artist_name}</h3>
        <p className='artist-description'>{props.album.album_name}</p>
      </div>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchIndividual
}, dispatch)

export default connect(null, mapDispatchToProps)(ArtistsMain)
