import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import contactReducer from './contactsSlice';

export const store = configureStore({
  reducer: {
    contactsData: contactReducer,
    auth: authReducer,
  },
});
