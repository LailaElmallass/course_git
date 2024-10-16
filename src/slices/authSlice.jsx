import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    role: null,
  },
  reducers: {
    login(state, action) {
      state.user = action.payload.user;
      state.role = action.payload.role;
    },
    logout(state) {
      state.user = null;
      state.role = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
