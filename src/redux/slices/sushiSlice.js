import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
const sushiSlice = createSlice({
  name: "sushi",
  initialState,
  reducers: {
    setItem(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setItem } = sushiSlice.actions;
export default sushiSlice.reducer;
