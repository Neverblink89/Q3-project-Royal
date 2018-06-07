import {
  FETCH_INDIVIDUAL_FAILED,
  FETCH_INDIVIDUAL_SUCCESS,


} from '../actions/individual'

let initialState = []

export default(state = initialState, action) => {
  switch (action.type) {
    case FETCH_INDIVIDUAL_FAILED:
      return action.payload
    case FETCH_INDIVIDUAL_SUCCESS:
      return [...action.payload]
    default:
      return state
  }
}
