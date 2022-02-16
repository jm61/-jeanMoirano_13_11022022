import PropTypes from 'prop-types'
import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
  } from './loginReducer'
import {
    USER_PROFILE_SUCCESS,
    USER_PROFILE_FAIL,
    USER_PROFILE_RESET,
    USER_PROFILE_UPDATE,
  } from './userReducer'

import axios from 'axios'

 
/**
 * 
 * @param {string} email 
 * @param {string} password 
 * @returns {JSX}
 */
export const login = (email, password) => async (dispatch) => {
  try {
    const url = 'http://localhost:3001/api/v1/user/login'
    const user = {email, password}
    const config = {
      headers: {'Content-type': 'application/json',}
    }
    const { data } = await axios.post(url, user, config)
  
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
 *  dispatch variable
 * @returns {JSX}
 */ 
export const logout = () => async (dispatch) => {
    dispatch({ type: USER_LOGOUT })
  }

login.PropTypes = {
  email: PropTypes.string,
  password: PropTypes.string
}