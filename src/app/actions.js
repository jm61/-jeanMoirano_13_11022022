import PropTypes from 'prop-types'
import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
  } from './loginReducer'

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
      headers: {
        'Content-type': 'application/json',
      },
    }

    const { data } = await axios.post(url, user, config)

    /* const { data } = await fetch(url,{
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(user)
      }  
    ) */
  
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
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