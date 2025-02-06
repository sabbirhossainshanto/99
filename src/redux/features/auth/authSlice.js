import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  username: null,
  balance: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      const { token, username, balance } = payload;
      state.token = token;
      state.username = username;
      state.balance = balance;
    },
    logout: (state) => {
      state.token = null;
      state.username = null;
      state.balance = null;
      localStorage.clear();
    },
  },
});

export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;
export const userToken = (state) => state.auth.token;
export const currentUser = (state) => state.auth.user;
