export const USER_LOGIN_PENDING = "USER_LOGIN_PENDING"
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED"

export const userLogin = ({ email, password, name, img_url }, history) => {
  return async dispatch => {
    try{
      dispatch({
        type:USER_LOGIN_PENDING
      })
      let response = await fetch("http://localhost:8000/api/login",{
        method: "POST",
        headers: {"Content-Type":'application/json'},
        body: JSON.stringify({email, password, name, img_url})
      })
      let userObject = await response.json()
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: userObject
      })
        history.push('/')
    } catch(err) {
      dispatch({
        type: USER_LOGIN_FAILED,
        patload: err
      })
    }
  }
}

export const USER_SIGNUP_FAILED = "USER_SIGNUP_FAILED"
export const USER_SIGNUP_PENDING = "USER_SIGNUP_PENDING"
export const USER_SIGNUP_SUCCESS = "USER_SIGNUP_SUCCESS"

export const userSignUp = (newUser, history) => {
  return async (dispatch) => {
    try{
      dispatch({
        type: USER_SIGNUP_PENDING
      })
      let response = await fetch("http://localhost:8000/api/userRegister", {
        method: "POST",
        headers: {'Content-type':'application/json'},
        body: JSON.stringify(newUser)
      })
      let isSignedUp = await response.json()
      dispatch({
        type: USER_SIGNUP_SUCCESS,
        payload:isSignedUp
      })
      history.push('/')
    } catch(err) {
      dispatch({
        type: USER_SIGNUP_FAILED,
        payload: err
      })
    }
  }
}
