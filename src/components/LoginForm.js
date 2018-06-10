import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userSignUp, userLogin } from '../redux/actions/users'


class LoginForm extends Component {

state={
  isToggle:true,
  email:'',
  password: '',
  name: '',
  img_url: ''
}

  render () {
console.log("props in LoginForm", this.props)

let handleSubmit = (e) => {
  e.preventDefault
  this.props.userLogin(this.state, this.props.history)
}

    return (

      <form className="form-container" onSubmit={this.handleSubmit} >

<div class="container">
  <label for="email"><b>Username</b></label>
  <input className="login-input" type="text" placeholder="Enter Email..." name="email"  required/>

  <label for="psw"><b>Password</b></label>
  <input className="login-input" type="password" placeholder="Enter Password..." name="psw"  required/>

  <Link to="/popular"><button className="button-link">Login</button></Link>
  <label>
    <input type="checkbox" checked="checked" name="remember"/> Remember me
  </label>
</div>

<div class="container" >
  <button type="button" onClick={this.props.toggleLogin}class="cancelbtn">Cancel</button>
  <span class="psw">Forgot <a class="NickTag"href="#">password?</a></span>
</div>
</form>

    )
  }
}



const mapDispatchToProps = dispatch => bindActionCreators({
  userLogin,
  userSignUp
})
export default connect(null, mapDispatchToProps)(LoginForm)
