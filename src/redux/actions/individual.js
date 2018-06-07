import axios from 'axios'



export const FETCH_INDIVIDUAL_FAILED = "FETCH_INDIVIDUAL_FAILED"
export const FETCH_INDIVIDUAL_SUCCESS = "FETCH_INDIVIDUAL_SUCCESS"
export const FETCH_INDIVIDUAL_PENDING = "FETCH_INDIVIDUAL_PENDING"

export const fetchIndividual = () => {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_INDIVIDUAL_PENDING
      })
      let individual = await axios.get('http://localhost:8000/api/artists/7')

      dispatch({
        type: FETCH_INDIVIDUAL_SUCCESS,
        payload: individual.data
      })
    } catch (err) {
      dispatch({
        type: FETCH_INDIVIDUAL_FAILED,
        payload: err
      })
    }
  }
}
