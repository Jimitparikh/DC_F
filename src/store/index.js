import { configureStore , combineReducers } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const middlewares = []
const persistConfig = {
  key: "root",
  version: 1,
  storage
}

const store = configureStore({
  reducer:  persistReducer(persistConfig, rootReducer()),
  middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			immutableCheck: false,
			serializableCheck: false,
		}).concat(middlewares),
  devTools: true,
})

store.asyncReducers = {}
// export const persistor = persistStore(store)
export const injectReducer = (key, reducer) => {
	if (store.asyncReducers[key]) {
		return false
	}
	store.asyncReducers[key] = reducer
	store.replaceReducer(persistReducer(persistConfig, rootReducer(store.asyncReducers)))
	// persistor.persist()
	return store
}

export default store;
