import { LogOutThunk, signInThunk, signUpThunk } from './operations';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  loading: false,
  error: null,
  isLogged: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(LogOutThunk.fulfilled, (state, { payload }) => {
        state.user = [];
        state.token = '';
        state.isLogged = false;
        state.error = null;
        state.loading = false;
      })
      .addMatcher(
        isAnyOf(signInThunk.fulfilled, signUpThunk.fulfilled),
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLogged = true;
          state.error = null;
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(signInThunk.pending, signUpThunk.pending),
        (state, action) => {
          state.isLogged = false;
          state.error = null;
          state.loading = true;
        }
      )
      .addMatcher(
        isAnyOf(signInThunk.rejected, signUpThunk.rejected),
        (state, action) => {
          state.isLogged = false;
          state.error = action.payload;
          state.loading = false;
        }
      ),
});

export const authReducer = authSlice.reducer;
