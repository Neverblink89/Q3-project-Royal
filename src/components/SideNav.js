import React from 'react'
import Library from './Library'
import Playlists from './Playlists'
import AddPlaylist from './AddPlaylist'

const SideNav = (props) => {


  return (
    <div className="side-nav-container">
      <Library />
      <Playlists />
      </div>

  )
}
export default SideNav
