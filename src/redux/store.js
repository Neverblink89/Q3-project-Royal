import { createStore, combineReducers, applyMiddleware } from 'redux'
import artistsReducer from './reducers/artistsReducer'
import songsReducer from './reducers/songsReducer'
import individualReducer from './reducers/individualReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'


let rootreducer = combineReducers({
  artists: artistsReducer,
  songs: songsReducer,
  individual: individualReducer

})

let middleware = [thunk, logger]


export default () => createStore(rootreducer, applyMiddleware(...middleware))
