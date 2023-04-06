import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import alertsReducer from "../features/alerts/alertsSlice";
import authReducer from "../features/auth/authSlice";
import recipeSlice from "../features/recipes/recipeSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    alerts: alertsReducer,
    recipes: recipeSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
