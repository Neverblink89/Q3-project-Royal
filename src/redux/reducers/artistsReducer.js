import {
  FETCH_ARTISTS_FAILED,
  FETCH_ARTISTS_SUCCESS,

} from '../actions/artists'

let initialState = []

export default(state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTISTS_FAILED:
      return action.payload
    case FETCH_ARTISTS_SUCCESS:
      return [...action.payload]
    default:
      return state
  }
}
