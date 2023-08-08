import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  titleArray: [],
};

export const cart = createSlice({
  name: "titleSearch",
  initialState,
  reducers: {
    pushTitleArray: (state, action) => {
      state.titleArray.push(action.payload);
    },
  },
});

export const { pushTitleArray } = cart.actions;
export default cart.reducer;
