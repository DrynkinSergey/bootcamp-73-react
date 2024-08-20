import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from './counter/slice';
import { todoReducer } from './todolist/slice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'bootcamp',
  version: 1,
  storage,
  // whitelist: ['items', 'search'],
  blacklist: ['search', 'filter'],
};

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todolist: persistReducer(persistConfig, todoReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
