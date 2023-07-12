import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const contactApi = axios.create({
  baseURL: 'https://64af0689c85640541d4e0d9a.mockapi.io/',
});

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAllContact',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await contactApi.get('/contacts');
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
      const { data } = await contactApi.delete(`/contacts/${id}`);
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
      const { data } = await contactApi.post(`/contacts`, user);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
