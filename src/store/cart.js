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
      // console.log(state.totalAmount,'totalMan')
    },
    calculateQuantity: (state, action) => {
      state.quantity = action.payload;
    },
    pushArray: (state, action) => {
      state.cartArray.push(action.payload);
    },
    // console.log()
    updateCart: (state, action) => {
      const { id, quantity, price } = action.payload;
      const roomIndex = state.cartArray.findIndex((item) => item.id === id);
      console.log(state.payload.totalAmount, "totl");

      if (roomIndex !== -1) {
        state.cartArray[roomIndex].quantity = state.totalAmount;
        state.cartArray[roomIndex].price = price;
      }
    },
    // console.log(id, quantity, price);
  },
});

export const { pushArray, calculateQuantity, calculateAmount, updateCart } =
  cart.actions;
export default cart.reducer;
