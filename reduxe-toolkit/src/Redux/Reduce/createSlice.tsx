import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs/promises";

export interface CounterState {
  value: number;
  name: string;
}

const initialState: CounterState = {
  value: 0,
  name: "anas",
};

const CreateSlice = createSlice({
  name: "reduce",
  initialState,
  reducers: {
    addOne: (state) => {
      state.value += 1;
    },
    MinesOne: (state) => {
      state.value -= 1;
    },
    setName: (state) => {
      state.name = state.name === "anas" ? "elias" : "anas";
    },
  },
});
export const { addOne, MinesOne, setName } = CreateSlice.actions;
export default CreateSlice.reducer;
