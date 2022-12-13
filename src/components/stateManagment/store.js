import { persistReducer, persistStore } from 'redux-persist'

import { createStore } from 'redux'
import reducres from './reducres'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, reducres)

export const store = createStore(persistReducer)
export const persistor = createStore(store)

// const store = createStore(reducres)
// export default store
