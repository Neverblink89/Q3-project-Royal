import React from 'react'




const ArtistsMain = (props) => {
  console.log(props.album)
return (
      <div className="circle-container">
      <div className="artist-circles">
        <a href="http://localhost:3001/artist"><img className='artist-image' alt='blah' src={props.album.album_url}/></a>
      </div>
        <h3>{props.album.artist_name}</h3>
        <p className='artist-description'>{props.album.album_name}</p>
      </div>
  )
}
export default ArtistsMain
