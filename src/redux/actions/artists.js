import axios from 'axios'



export const FETCH_ARTISTS_FAILED = "FETCH_ARTISTS_FAILED"
export const FETCH_ARTISTS_SUCCESS = "FETCH_ARTISTS_SUCCESS"
export const FETCH_ARTISTS_PENDING = "FETCH_ARTISTS_PENDING"

export const fetchArtists = () => {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_ARTISTS_PENDING
      })
      let albums = await axios.get('http://localhost:8000/api/albums')

      dispatch({
        type: FETCH_ARTISTS_SUCCESS,
        payload: albums.data
      })
    } catch (err) {
      dispatch({
        type: FETCH_ARTISTS_FAILED,
        payload: err
      })
    }
  }
}
