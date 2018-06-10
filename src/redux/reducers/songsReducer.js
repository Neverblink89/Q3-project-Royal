import {
  FETCH_SONGS_FAILED,
  FETCH_SONGS_SUCCESS,
  ADD_CART_FAILED,
  ADD_CART_SUCCESS,
  DELETE_CART_FAILED,
  DELETE_CART_SUCCESS


} from '../actions/songs'

let initialState = []

export default(state = initialState, action) => {
  switch (action.type) {
    case FETCH_SONGS_FAILED:
      return action.payload
    case FETCH_SONGS_SUCCESS:
      return [...action.payload]
    case ADD_CART_SUCCESS:
      return state.map(item => item.id === action.payload ?
        Object.assign({}, item, {
        inCart: true
      }): item)
    case ADD_CART_FAILED:
      return action.payload
    case DELETE_CART_SUCCESS:
      return state.filter(song => song.id !== action.payload)
    case DELETE_CART_FAILED:
      return state
    default:
      return state
  }
}
