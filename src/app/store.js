import { createStore } from 'redux'
import {loginReducer} from './loginReducer'

const initialState = { test: 0}

const store = createStore(loginReducer, initialState)

export default store