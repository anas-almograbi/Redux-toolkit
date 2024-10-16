import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Update the action type string to not have spaces
export const psotapi = createAsyncThunk(
  "posts/getAll", // Correct action type string
  async (arg: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(arg);
      return res.data; // Return the fetched data
    } catch (err) {
      // Ensure that err.message exists
      return rejectWithValue(
        err instanceof Error ? err.message : "Something went wrong"
      );
    }
  }
);
