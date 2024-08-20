import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from './counter/slice';
import { todoReducer } from './todolist/slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todolist: todoReducer,
  },
});
