import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAddContact,
  fetchAllContacts,
  fetchDeleteContact,
} from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchAllContacts.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = payload;
      })
      .addCase(fetchDeleteContact.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        const index = state.contacts.items.findIndex(
          task => task.id === payload.id
        );
        state.contacts.items.splice(index, 1);
      })
      .addCase(fetchAddContact.fulfilled, (state, { payload }) => {
        state.contacts.items = [...state.contacts.items, payload];
        state.contacts.isLoading = false;
        state.contacts.error = null;
      })
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.contacts.isLoading = false;
          state.contacts.error = payload;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/pending'),
        (state, { payload }) => {
          state.contacts.isLoading = true;
          state.contacts.error = null;
        }
      );
  },
});

export default contactSlice.reducer;
export const { addContact, deleteContact, changeFilter } = contactSlice.actions;
