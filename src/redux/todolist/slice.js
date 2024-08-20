import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [{ id: 1, todo: 'Learn Redux', completed: true }],
  filter: '',
  search: '',
};

const slice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
    changeSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const todoReducer = slice.reducer;
export const { addTodo, deleteTodo, changeFilter, changeSearch } = slice.actions;
