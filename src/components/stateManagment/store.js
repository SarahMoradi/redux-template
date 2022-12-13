import { applyMiddleware, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'

import logger from 'redux-logger'
import reducers from './reducres'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, reducers)

// export const store = createStore(
//   persistedReducer,
//   applyMiddleware(logger)
// )

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export const persistor = persistStore(store)
