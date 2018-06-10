import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addToCart } from '../redux/actions/songs'


const ArtistSongList = (props) => {
let id = props.id
  return (

    <tr>
      <td className="list-number">{props.index + 1}</td>
      <td onClick={() => props.addToCart(id)} className="list-add"><i  class="fas fa-plus bang"></i></td>
      <td className="list-title">{props.song.song_title}</td>
      <td className="list-time">{props.song.time}</td>
      <td className="list-price">{props.song.price}</td>
    </tr>
  )

}

let mapDispatchToProps = dispatch => bindActionCreators({
  addToCart
},dispatch)

export default connect(null, mapDispatchToProps)(ArtistSongList)
