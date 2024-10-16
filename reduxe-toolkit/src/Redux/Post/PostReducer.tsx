import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { psotapi } from "./postApi";

export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface CounterState {
  name: string;
  post: Post[];
  loading: boolean;
  error: any;
}

const initialState: CounterState = {
  name: "post",
  post: [],
  loading: false,
  error: null,
};

const Postslice = createSlice({
  name: "psot",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(psotapi.pending, (state) => {
        state.loading = true; // Set loading to true
        state.error = null; // Reset error to null
      })
      .addCase(psotapi.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.loading = false; // Set loading to false
        state.error = null; // Reset error to null
        state.post = action.payload; // Update state with the fetched posts
      })
      .addCase(psotapi.rejected, (state, action) => {
        state.loading = false; // Set loading to false
        state.error = action.error.message; // Set error to the error message
      });
  },
});

export default Postslice.reducer;
