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
//petromogsyla@gmail.com

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
