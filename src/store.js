import { configureStore , combineReducers } from '@reduxjs/toolkit'
import authReducer from "./slices/auth";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: "root",
  version: 1,
  storage
}

const reducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
})

export default store;