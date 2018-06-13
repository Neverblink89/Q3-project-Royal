import React from 'react'
import { Link } from 'react-router-dom'



const Library = (props) => {

  return (


      <div className="library-container">
        <span className='tags'>YOUR LIBRARY</span>
          <br/>
          <br/>
        <Link className="popular-route" to={"/popular"}><div className="library">Popular Albums</div></Link>
          <div className="library" >Top Songs</div>
          <div className="library">Browser</div>
          <div className="library">Stations</div>
          <div className="library">Local Files</div>
          <div className="library">Videos</div>
          <div className="library">Podcasts</div>
          <div className="library">Recently Played</div>
      </div>
  )
}
export default Library
