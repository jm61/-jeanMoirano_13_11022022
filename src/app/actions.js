import PropTypes from 'prop-types'
import axios from 'axios'
import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_PROFILE_SUCCESS,
    USER_PROFILE_FAIL,
    USER_PROFILE_RESET,
    USER_PROFILE_UPDATE,
  } from './_types'

 
/**
 * @param {string} email 
 * @param {string} password 
 * @returns {object} payload token
 */
export const login = (email, password, rememberMe) => async (dispatch) => {
  try {
    console.log({rememberMe})
    const url = 'http://localhost:3001/api/v1/user/login'
    const user = {email, password}
    const config = {
      headers: {'Content-type': 'application/json',}
    }
    const { data } = await axios.post(url, user, config)

    /* const { data } = await fetch(url,{
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(user)
      }  
    ) */
  
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
      dispatch(userProfile(data.body.token))
  } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
    finally {
      console.log('login executed')
    }
  }

/**
 * @param {string} token 
 * @returns {object} payload data
 */
export const userProfile = token => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    const { data } = await axios.post(
      'http://localhost:3001/api/v1/user/profile',
      { token },
      config
    )

    dispatch({ type: USER_PROFILE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: USER_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

/**
 * @param {string} token 
 * @param {string} newFirstName 
 * @param {string} newLastName 
 * @returns {JSX}
 */
export const updateProfile =
  (token, newFirstName, newLastName) => async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }

      const { data } = await axios.put(
        'http://localhost:3001/api/v1/user/profile',
        { firstName: newFirstName, lastName: newLastName },
        config
      )

      dispatch({ type: USER_PROFILE_UPDATE, payload: data })
    } catch (error) {
      dispatch({
        type: USER_PROFILE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  
/**
 *  dispatch variable
 * @returns {JSX}
 */ 
export const logout = () => async (dispatch) => {
    dispatch({ type: USER_LOGOUT })
    dispatch({type: USER_PROFILE_RESET})
  }

login.PropTypes = {
  email: PropTypes.string,
  password: PropTypes.string
}
userProfile.PropTypes = {
  token: PropTypes.string
}
updateProfile.PropTypes = {
  newFirstName: PropTypes.string,
  newLastName: PropTypes.string,
  token: PropTypes.string
}