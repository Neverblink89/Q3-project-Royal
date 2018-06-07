import React, { Component } from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

class LoginMain extends Component {


      state={
        isToggle:false,
        toggled:false
      }
      toggleLogin(){
       this.setState({isToggle:!this.state.isToggle})
     }
     toggleRegister(){
       this.setState({toggled:!this.state.toggled})
     }


  render () {


    return (

      <div className="login-body-container">
        <div className="login-button-container">
          <a  onClick={()=> this.setState({isToggle: !this.state.isToggle})}  className="login-button">LOG IN</a>

          <a onClick={()=> this.setState({toggled: !this.state.toggled})}  className="register-button">REGISTER</a>
        </div>
        <div className="login-page-title">
          <h1>Express yourself.</h1>
        </div>

          {this.state.isToggle ? <LoginForm toggleLogin={this.toggleLogin}/> : null}
          {this.state.toggled ? <RegisterForm toggleRegister={this.toggleRegister}/> : null}

      </div>
    )
  }
}
export default LoginMain
