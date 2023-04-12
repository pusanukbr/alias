import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './user/slice';

const authPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['token', '_id']
};

export const store = configureStore({
  reducer: {
    user: persistReducer(authPersistConfig, authReducer)
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }),
  devTools: process.env.NODE_ENV === 'development'
});

export const persistor = persistStore(store);
