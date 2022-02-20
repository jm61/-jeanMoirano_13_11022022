import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import { loginReducer } from './loginReducer'
import { userReducer } from './userReducer'
import { persistStore, persistReducer } from 'redux-persist'
import sessionStorage from 'redux-persist/lib/storage/session'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['auth'],
  stateReconciler: autoMergeLevel2
}

const authPersistConfig = {
  key: 'auth',
  storage: sessionStorage,
}

const rootReducer = combineReducers({
  userLogin: loginReducer,
  userProfile: userReducer
})

const authdReducer = persistReducer(authPersistConfig, rootReducer)

const store = createStore(
  authdReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
export const persistor = persistStore(store)


