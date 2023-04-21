import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './Reducers/cartSlice';
import cartUiSlice from "./Reducers/cartUiSlice";

export const Store = configureStore({
  reducer: {
    cart: cartSlice,
    cartUI: cartUiSlice
  }
});