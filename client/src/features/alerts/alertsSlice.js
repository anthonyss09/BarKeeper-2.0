import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

export const alertsSlice = createSlice({
  name: "alerts",

  initialState: {
    showAlert: false,
    alertType: "",
    alertMessage: "",
  },

  reducers: {
    displayAlert: (state, action) => {
      state.showAlert = true;
      state.alertType = action.payload.alertType;
      state.alertMessage = action.payload.alertMessage;
    },
    clearAlert: (state, action) => {
      state.showAlert = false;
      state.alertType = "";
      state.alertMessage = "";
    },
  },

  extraReducers: (builder) => {
    builder.addMatcher(
      apiSlice.endpoints.loginUser.matchRejected,
      (state, { payload }) => {
        state.showAlert = true;
        state.alertType = "danger";
        state.alertMessage = payload.data.error;
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.registerUser.matchRejected,
      (state, { payload }) => {
        state.showAlert = true;
        state.alertType = "danger";
        state.alertMessage = payload.data.error;
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.createRecipe.matchRejected,
      (state, { payload }) => {
        state.showAlert = true;
        state.alertType = "danger";
        state.alertMessage = payload.data.error;
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.createRecipe.matchFulfilled,
      (state, { payload }) => {
        state.showAlert = true;
        state.alertType = "success";
        state.alertMessage = "Succesfully added recipe to book.";
      }
    );
  },
});

export const selectAlertsInfo = (state) => state.alerts;
export const { displayAlert, clearAlert } = alertsSlice.actions;
export default alertsSlice.reducer;
