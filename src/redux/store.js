import { configureStore } from '@reduxjs/toolkit';

import { todoReducer } from './todolist/slice';
import { productsReducer } from './productsSlice';
import { filterSlice } from './filterSlice';

export const store = configureStore({
  reducer: {
    todolist: todoReducer,
    products: productsReducer,
    filter: filterSlice,
  },
});
