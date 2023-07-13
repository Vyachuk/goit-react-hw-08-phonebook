import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const authApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});
const setToken = token => {
  authApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearToken = () => {
  authApi.defaults.headers.common.Authorization = ``;
};

export const signUpThunk = createAsyncThunk(
  'auth/signUp',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await authApi.post('users/signup', user);
      setToken(data.token);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const signInThunk = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await authApi.post('users/login', user);
      setToken(data.token);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const LogOutThunk = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await authApi.post('/users/logout');
      clearToken();
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const token = getState().auth.token;
    if (!token) {
      return rejectWithValue('Token is not found!');
    }

    try {
      setToken(token);
      const { data } = await authApi.get('/users/current');
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
