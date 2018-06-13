import React from 'react'
import ArtistSongList from './ArtistSongList'



const ArtistAlbumSongs = (props) => {
      // maping songs to the child component <ArtistSongList />
      let artistSongs = props.songs.songs.map((item, index)=> <ArtistSongList key={index} index={index} id={item.id} song={item}/>)




  return (

        <div className="individual-albums-container">
          <div className="individual-album-container">
            <div className="album-image-container">
              <img className="artist-cover-image" src={props.songs.album_url}/>
              </div>
              <div className="album-image-container-text">
                <h1>{props.songs.album_name} </h1>
              </div>
            </div>
          <div className="song-list-items-container">
            <table  className="song-list-table">
              <tr className='table-row'>
                <th  className="number">#</th>
                <th className="add">ADD TO CART</th>
                <th className="title">TITLE</th>
                <th className="time">TIME</th>
                <th className="price">PRICE</th>
              </tr>
              {artistSongs}
            </table>
        </div>
        </div>

  )
}





export default ArtistAlbumSongs
