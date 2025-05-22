import { createSlice, current } from "@reduxjs/toolkit";

const initialState = { isAuth: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,

  reducers: {
    login: (state) => {
      state.isAuth = true;
      console.log(current(state));
    },
    logout: (state) => {
      state.isAuth = false;
      console.log(current(state));
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
