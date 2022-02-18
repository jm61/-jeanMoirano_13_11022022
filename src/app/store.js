import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import { loginReducer } from './loginReducer'
import { userReducer } from './userReducer'
import { persistStore, persistReducer } from 'redux-persist'
import sessionStorage from 'redux-persist/lib/storage/session'

const rootReducer = combineReducers({
  userLogin: loginReducer,
  userProfile: userReducer,
})

const authPersistConfig = {
  key: 'root',
  storage: sessionStorage,
}

const persistedReducer = persistReducer(authPersistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
export const persistor = persistStore(store)


