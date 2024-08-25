import { configureStore } from '@reduxjs/toolkit';

import { todoReducer } from './todolist/slice';
import { filterSlice } from './filterSlice';

export const store = configureStore({
  reducer: {
    todolist: todoReducer,
    filter: filterSlice,
  },
});
