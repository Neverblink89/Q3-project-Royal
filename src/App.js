import React, { Component } from 'react';
import './App.css';
import SideNav from './components/SideNav'
import Main from './components/Main'
import Footer from './components/Footer'
import ArtistPage from './components/ArtistPage'
import LoginMain from './components/LoginMain'
import Cart from './components/Cart'
import Token from './components/Token'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
        <Router>

        <div className="App">

        <Route exact path='/' component={LoginMain}/>
        <Route exact path='/popular' component={Main}/>
        <Route exact path='/artist' component={ArtistPage}/>
        <Route exact path='/checkout' component={Cart}/>
        <Route exact path="/token" component={Token}/>
        </div>
        </Router>

    );
  }
}

export default App;
