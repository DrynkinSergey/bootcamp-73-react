import { configureStore } from '@reduxjs/toolkit';

import { todoReducer } from './todolist/slice';
import { filterSlice } from './filterSlice';
import { authReducer } from './auth/slice';

export const store = configureStore({
  reducer: {
    todolist: todoReducer,
    filter: filterSlice,
    auth: authReducer,
  },
});
