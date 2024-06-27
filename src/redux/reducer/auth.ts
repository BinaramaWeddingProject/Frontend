// src/redux/reducer/login.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/types';

interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem('user') as string) || null,
  isLoggedIn: !!localStorage.getItem('user'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem('user');
    },
    checkLoginStatus(state) {
      const user = JSON.parse(localStorage.getItem('user') as string);
      if (user) {
        state.user = user;
        state.isLoggedIn = true;
      } else {
        state.user = null;
        state.isLoggedIn = false;
      }
    },

    cityStatus(state) {
      const city = JSON.parse(localStorage.getItem('city') as string);
      if (city) {
        state.user = city;
       
      } else {
        state.user = null;
        
      }
    }
  },
});

export const { login, logout, checkLoginStatus, cityStatus } = authSlice.actions;

export default authSlice.reducer;
