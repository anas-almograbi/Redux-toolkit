import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Reduce/createSlice";
import postReducer from "../Post/PostReducer";

export const store = configureStore({
  reducer: {
    Count: counterReducer,
    Post: postReducer,
  },
  devTools: process.env.NODE_ENV !== "production", // Enable devTools in development only
});

// Export types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
