import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addTodoThunk, deleteTodoThunk, fetchTodosThunk, renameTodoThunk, toggleTodoThunk } from './todosOps';

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
      .addCase(fetchTodosThunk.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(toggleTodoThunk.fulfilled, (state, action) => {
        const item = state.items.find(item => item.id === action.payload);
        item.completed = !item.completed;
      })
      .addCase(renameTodoThunk.fulfilled, (state, action) => {
        state.items = state.items.map(item => (item.id === action.payload.id ? action.payload : item));
      })
      .addCase(deleteTodoThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      })

      .addMatcher(
        isAnyOf(renameTodoThunk.rejected, addTodoThunk.rejected, fetchTodosThunk.rejected, deleteTodoThunk.rejected, toggleTodoThunk.rejected),
        (state, action) => {
          state.isError = action.payload;
          state.isLoading = false;
        }
      )

      .addMatcher(
        isAnyOf(renameTodoThunk.pending, addTodoThunk.pending, fetchTodosThunk.pending, deleteTodoThunk.pending, toggleTodoThunk.pending),
        state => {
          state.isError = false;
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(renameTodoThunk.fulfilled, addTodoThunk.fulfilled, fetchTodosThunk.fulfilled, deleteTodoThunk.fulfilled, toggleTodoThunk.fulfilled),
        state => {
          state.isLoading = false;
        }
      );
  },
});

export const todoReducer = slice.reducer;
export const { changeFilter, changeSearch } = slice.actions;
