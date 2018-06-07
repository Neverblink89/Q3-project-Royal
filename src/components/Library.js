import React from 'react'




const Library = (props) => {

  return (


      <div className="library-container">
        <span className='tags'>YOUR LIBRARY</span>
        <br/>
        <br/>
        <div className="library">Recently Played</div>
        <div className="library" >Songs</div>
        <div className="library">Albums</div>
        <div className="library">Stations</div>
        <div className="library">Local Files</div>
        <div className="library">Videos</div>
        <div className="library">Podcasts</div>
        <div className="library">Recently Played</div>
      </div>
  )
}
export default Library
