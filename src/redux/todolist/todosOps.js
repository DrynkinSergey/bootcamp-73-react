import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66c6dfaa8b2c10445bc80176.mockapi.io/';

export const fetchTodosThunk = createAsyncThunk('fetchAll', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('todos');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteTodoThunk = createAsyncThunk('deleteTodo', async (id, thunkAPI) => {
  try {
    await axios.delete(`todos/${id}`);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addTodoThunk = createAsyncThunk('addTodo', async (body, thunkAPI) => {
  try {
    const { data } = await axios.post('/todos', body);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const fetchTodosThunk = () => async dispatch => {
//   try {
//     dispatch(setIsError(false));
//     dispatch(setIsLoading(true));
//     const { data } = await axios.get('/todos');
//     dispatch(fetchingSuccess(data));
//   } catch (error) {
//     dispatch(setIsError(true));
//   }
// };

// export const deleteTodoThunk = id => async dispatch => {
//   try {
//     dispatch(setIsError(false));
//     dispatch(setIsLoading(true));
//     await axios.delete(`todos/${id}`);
//     dispatch(deleteTodo(id));
//     dispatch(setIsLoading(false));
//   } catch (error) {
//     dispatch(setIsError(true));
//   }
// };

// export const addTodoThunk = body => async dispatch => {
//   try {
//     dispatch(setIsLoading(true));
//     const { data } = await axios.post('/todos', body);
//     dispatch(addTodo(data));
//     dispatch(setIsLoading(false));
//   } catch (error) {
//     dispatch(setIsError(true));
//   }
// };
