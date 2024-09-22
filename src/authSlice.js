// src/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    Login1(state) {
      state.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', 'true');
    },
    Logout1(state) {
      state.isLoggedIn = false;
      localStorage.removeItem('isLoggedIn');
    },
  },
});

export const { Login1, Logout1 } = authSlice.actions;
export default authSlice.reducer;
