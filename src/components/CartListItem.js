import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteSong } from '../redux/actions/songs'
import { bindActionCreators } from 'redux'


class CartListItem extends Component {


  render () {
    let id = this.props.item.id
    console.log("this",this.props.item)
    return (

    <tbody>
      <tr>
        <td className="font">{this.props.item ? this.props.item.song_title : ""}</td>
        <td className="font"><input type="number" value="1" min="1" max="12"/></td>
        <td className="trash"><div onClick={() => this.props.deleteSong(id)}><i class="fas fa-trash"></i></div></td>
        <td className="prices">{this.props.item ? this.props.item.price : ""}</td>
      </tr>
    </tbody>

    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteSong
},dispatch)

export default connect(null, mapDispatchToProps)(CartListItem)
