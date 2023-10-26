import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import cart from "./slices/cartSlice";
import sushi from "./slices/sushiSlice";
//Create storage
export const store = configureStore({
  reducer: { filter, cart, sushi },
});
