import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  roomsHistory: [],
  isAuth: false,
  name: '',
  gaming: 0,
  roomCreated: 0,
  date: '00.00.0000',
  avatar: '',
  _id: '',
  token: '',
  isLoading: false,
  error: ''
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    // Register
    [register.pending](state) {
      return {
        ...state,
        error: '',
        isLoading: true
      };
    },
    [register.fulfilled](state, { payload }) {
      return {
        ...state,
        ...payload,
        isAuth: true,
        isLoading: false
      };
    },
    [register.rejected](state, { payload }) {
      return {
        ...state,
        error: payload,
        isLoading: false
      };
    },

    // logIn
    [logIn.pending](state) {
      return {
        ...state,
        error: '',
        isLoading: true
      };
    },
    [logIn.fulfilled](state, { payload }) {
      return {
        ...state,
        ...payload,
        isAuth: true,
        isLoading: false
      };
    },
    [logIn.rejected](state, { payload }) {
      return {
        ...state,
        error: payload,
        isLoading: false
      };
    },

    // logOut
    [logOut.pending](state) {
      return {
        ...state,
        error: '',
        isLoading: true
      };
    },
    [logOut.fulfilled](state, { payload }) {
      return {
        ...state,
        ...payload,
        isAuth: false,
        isLoading: false
      };
    },
    [logOut.rejected](state, { payload }) {
      return {
        ...state,
        error: payload,
        isLoading: false
      };
    },

    [refreshUser.pending](state) {
      return {
        ...state,
        error: '',
        isLoading: true
      };
    },
    [refreshUser.fulfilled](state, { payload }) {
      return {
        ...state,
        ...payload,
        isAuth: true,
        isLoading: false
      };
    },
    [refreshUser.rejected](state, { payload }) {
      return {
        ...state,
        error: payload,
        isLoading: false
      };
    }
  }
});

export const authReducer = authSlice.reducer;
