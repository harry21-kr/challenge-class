import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  initialState,
  name: "counter",
  reducers: {
    increment: (prevState, action) => {
      const value = action.payload;
      prevState.count += value;
    },
    decrement: (prevState, action) => {
      const value = action.payload;
      prevState.count -= value;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
