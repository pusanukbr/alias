import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../../API/service/AuthService';
import { setAuthHeader, clearAuthHeader } from '../../API/http';

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  try {
    const res = await AuthService.registration(credentials);
    setAuthHeader(res.data.user.token);
    return res.data.user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const res = await AuthService.signin(credentials);
    setAuthHeader(res.data.user.token);
    return res.data.user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await AuthService.logout();
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  // Reading the token from the state via getState()
  const state = thunkAPI.getState();
  const persistedToken = state.user.token;

  if (persistedToken === null) {
    // If there is no token, exit without performing any request
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    // If there is a token, add it to the HTTP header and perform the request
    setAuthHeader(persistedToken);
    const res = await AuthService.checkAuth();
    return res.data.user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
