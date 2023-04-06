import { apiSlice } from "../api/apiSlice";
import { createSlice, current } from "@reduxjs/toolkit";

const currentUser = JSON.parse(localStorage.getItem("user"));
const token = JSON.parse(localStorage.getItem("token")) || null;

const initialState = {
  user: currentUser,
  token: token,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser(state, action) {
      state.user = "";
      state.token = "";
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      apiSlice.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.registerUser.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
      }
    );
  },
});

export const selectCurrentUser = (state) => state.auth.user;

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
