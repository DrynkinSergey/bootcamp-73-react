import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const goitApi = axios.create({
  baseURL: 'https://task-manager-api.goit.global/',
});

const setAuthHeader = token => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  goitApi.defaults.headers.common.Authorization = ``;
};

export const registerThunk = createAsyncThunk('register', async (credentials, thunkAPI) => {
  try {
    const { data } = await goitApi.post('/users/signup', credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const loginThunk = createAsyncThunk('login', async (credentials, thunkAPI) => {
  try {
    const { data } = await goitApi.post('/users/login', credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logoutThunk = createAsyncThunk('logout', async (_, thunkAPI) => {
  try {
    await goitApi.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
