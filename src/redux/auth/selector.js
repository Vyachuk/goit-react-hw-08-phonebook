import { createSelector } from '@reduxjs/toolkit';

const selectAuthUser = state => state.auth.user.name;
export const selectIsLooged = state => state.auth.isLogged;
export const selectAuthError = state => state.auth.error;

export const selectUser = createSelector([selectAuthUser], user => user);
