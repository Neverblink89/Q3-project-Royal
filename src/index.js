import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store'
import { fetchArtists } from './redux/actions/artists'
import { fetchSongs } from './redux/actions/songs'
import { fetchIndividual } from './redux/actions/individual'


let newStore = store()
newStore.dispatch(fetchArtists())
newStore.dispatch(fetchSongs())

ReactDOM.render(
  <Provider store={newStore}>
  <App />
  </Provider>
  , document.getElementById('root'));
