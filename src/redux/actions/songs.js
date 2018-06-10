import axios from 'axios'

export const DELETE_CART_FAILED = "DELETE_CART_FAILED"
export const DELETE_CART_SUCCESS = "DELETE_CART_SUCCESS"

export const FETCH_SONGS_FAILED = "FETCH_SONGS_FAILED"
export const FETCH_SONGS_SUCCESS = "FETCH_SONGS_SUCCESS"
export const FETCH_SONGS_PENDING = "FETCH_SONGS_PENDING"

export const fetchSongs = () => {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_SONGS_PENDING
      })
      let songs = await axios.get('http://localhost:8000/api/songs')
      dispatch({
        type: FETCH_SONGS_SUCCESS,
        payload: songs.data
      })
    } catch (err) {
      dispatch({
        type: FETCH_SONGS_FAILED,
        payload: err
      })
    }
  }
}
export const ADD_CART_SUCCESS = "ADD_CART_SUCCESS"
export const ADD_CART_FAILED = "ADD_CART_FAILED"
export const addToCart = (id) => {
  return dispatch => {
    try{
    dispatch({
      type:ADD_CART_SUCCESS,
      payload: id
    })
  } catch(err){
    dispatch({
      type:ADD_CART_FAILED,
      payload:err
    })
  }
}
}

export const deleteSong = (id) => {
  return dispatch => {
    try{
      dispatch({
        type:DELETE_CART_SUCCESS,
        payload: id
      })
    } catch(err){
      dispatch({
        type:DELETE_CART_FAILED,
        payload: id
      })
    }
  }
}
