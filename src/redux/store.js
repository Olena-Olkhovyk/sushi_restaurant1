import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
//Create storage
export const store = configureStore({
  reducer: { filter },
});
