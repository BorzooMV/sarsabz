import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from '../Reducers';
import logger from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const initialState = {};

const Store = createStore(
  persistedReducer,
  initialState,
  applyMiddleware(logger)
);

export const persistor = persistStore(Store);

export default Store;
