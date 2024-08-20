import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from './counter/slice';
import { todoReducer } from './todolist/slice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { productsReducer } from './productsSlice';
import { filterSlice } from './filterSlice';

const persistConfig = {
  key: 'bootcamp',
  version: 1,
  storage,
  // whitelist: ['items', 'search'],
  blacklist: ['search', 'filter'],
};

const persistConfigProducts = {
  key: 'products',
  version: 1,
  storage,
  whitelist: ['products'],
};

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todolist: persistReducer(persistConfig, todoReducer),
    products: persistReducer(persistConfigProducts, productsReducer),
    filter: filterSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
