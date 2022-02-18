import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import { loginReducer } from './loginReducer'
import { userReducer } from './userReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import sessionStorage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
  userLogin: loginReducer,
  userProfile: userReducer,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
export const persistor = persistStore(store)


