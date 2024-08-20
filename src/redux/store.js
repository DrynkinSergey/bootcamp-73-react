import { configureStore } from '@reduxjs/toolkit';

import { todosReducer } from './todolist/reducer';
import { counterReducer } from './counter/slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todolist: todosReducer,
  },
});
