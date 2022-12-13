import { persistReducer, persistStore } from 'redux-persist'

import { createStore } from 'redux'
import reducers from './reducres'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)

// const store = createStore(reducres)
// export default store
