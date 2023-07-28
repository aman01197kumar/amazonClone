import { configureStore } from "@reduxjs/toolkit";
import shoppingCart from "./cart";

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCart,
  },
});
