import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialStateValue,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    multiply: (state, action) => {
      state.count *= action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, multiply } = counterSlice.actions;

export default counterSlice.reducer;
