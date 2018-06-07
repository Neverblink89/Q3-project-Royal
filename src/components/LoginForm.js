import React, { Component } from 'react'



class LoginForm extends Component {

state={
  isToggle:true
}

  render () {
console.log("props in LoginForm", this.props)



    return (

      <form className="form-container" action="action_page.php">

<div class="container">
  <label for="email"><b>Username</b></label>
  <input type="text" placeholder="Enter Email..." name="email"  required/>

  <label for="psw"><b>Password</b></label>
  <input type="password" placeholder="Enter Password..." name="psw"  required/>

  <button type="submit">Login</button>
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
export default LoginForm
