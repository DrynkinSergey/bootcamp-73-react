import { createAsyncThunk } from '@reduxjs/toolkit';
import { goitApi } from '../auth/operations';

export const fetchTodosThunk = createAsyncThunk('fetchAll', async (_, thunkAPI) => {
  try {
    const { data } = await goitApi.get('tasks');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteTodoThunk = createAsyncThunk(
  'deleteTodo',
  async (id, thunkAPI) => {
    try {
      await goitApi.delete(`tasks/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (id, thunkAPI) => {
      const isLoading = thunkAPI.getState().todolist.isLoading;
      if (isLoading) {
        return false;
      }
    },
  }
);

export const addTodoThunk = createAsyncThunk('addTodo', async (body, thunkAPI) => {
  try {
    await goitApi.post('/tasks', body);
    thunkAPI.dispatch(fetchTodosThunk());
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const toggleTodoThunk = createAsyncThunk('toggleTodo', async (body, thunkAPI) => {
  try {
    const { data } = await goitApi.patch(`tasks/${body.id}`, { ...body, completed: !body.completed });
    return data.id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const renameTodoThunk = createAsyncThunk('renameTodo', async (body, thunkAPI) => {
  try {
    const { data } = await goitApi.patch(`tasks/${body.id}`, body);
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
