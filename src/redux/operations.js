import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from './auth/operations';

// const contactApi = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com/',
// });

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAllContact',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await authApi.get('/contacts');
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await authApi.delete(`/contacts/${id}`);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/addContact',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await authApi.post(`/contacts`, user);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
