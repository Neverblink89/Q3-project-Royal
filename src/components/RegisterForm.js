import React, {Component} from 'react'

class RegisterForm extends Component {

  render() {

    return (
      <form className="form-container-register" action="action_page.php">

      <div class="container">
        <label for="uname">
          <b>Email</b>
        </label>
        <input type="text" placeholder="Enter Username"  required="required"/>

        <label for="psw">
          <b>Password</b>
        </label>
        <input type="password" placeholder="Enter Password"  required="required"/>

          <label for="name">
            <b>Full Name</b>
          </label>
          <input type="text" placeholder="Enter Name"  required="required"/>

            <label for="image_url">
              <b>Image Url</b>
            </label>
            <input type="text" placeholder="Enter an image url..." name="image_url" required="required"/>

        <button type="submit">Login</button>

      </div>

      <div class="container">
        <button type="button" onClick={()=>this.props.toggleRegister} class="cancelbtn">Cancel</button>
        <span class="psw">Forgot
          <a href="#">password?</a>
        </span>
      </div>
    </form>
  )
  }
}
export default RegisterForm
