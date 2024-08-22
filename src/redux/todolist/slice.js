import { createSlice } from '@reduxjs/toolkit';
import { addTodoThunk, deleteTodoThunk, fetchTodosThunk } from './todosOps';

const initialState = {
  items: [],
  filter: '',
  search: '',
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
    changeSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodosThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchTodosThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTodosThunk.rejected, (state, action) => {
        state.isError = action.payload;
      })
      .addCase(deleteTodoThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      })
      .addCase(addTodoThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export const todoReducer = slice.reducer;
export const { changeFilter, changeSearch } = slice.actions;
