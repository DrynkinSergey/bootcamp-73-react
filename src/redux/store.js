import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counter/reducer';
import { todosReducer } from './todolist/reducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todolist: todosReducer,
  },
});
