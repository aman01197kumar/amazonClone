import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartArray: [],
  quantity: 0,
  totalAmount: 0,
};

export const cart = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    calculateAmount: (state, action) => {
      state.totalAmount = action.payload;
    },
    calculateQuantity: (state, action) => {
      state.quantity = action.payload;
    },
    pushArray: (state, action) => {
      let find = state.cartArray.findIndex(
        (item) => item.id === action.payload.id
      );
      if (find >= 0) {
        state.cartArray[find].quantity = action.payload.quantity;
        state.cartArray[find].price = action.payload.price;
      } else {
        state.cartArray.push(action.payload);
      }
    },
  },
});

export const { pushArray, calculateQuantity, calculateAmount, updateCart } =
  cart.actions;
export default cart.reducer;
