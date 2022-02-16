import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import { loginReducer } from './loginReducer'
import { userReducer } from './userReducer'

const rootReducer = combineReducers({
  userLogin: loginReducer,
  userProfile: userReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store

