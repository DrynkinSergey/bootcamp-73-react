import { createSlice } from '@reduxjs/toolkit';
import { fetchTodosThunk } from './todosOps';

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

    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsError: (state, action) => {
      state.isError = action.payload;
      state.isLoading = false;
    },
    fetchingSuccess: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
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
      });
  },
});

export const todoReducer = slice.reducer;
export const { addTodo, deleteTodo, changeFilter, changeSearch, setIsError, setIsLoading, fetchingSuccess } = slice.actions;
