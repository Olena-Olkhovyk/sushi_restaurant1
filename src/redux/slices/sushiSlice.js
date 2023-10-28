import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSushi = createAsyncThunk(
  "sushi/fetchSushiStatus",
  async (params) => {
    const { category, search, sort } = params;
    const { data } = await axios.get(
      `https://651ee1a444a3a8aa476925cf.mockapi.io/sushi?${category}&sortBy=${sort}&order=asc${search}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: "loading",
};
const sushiSlice = createSlice({
  name: "sushi",
  initialState,
  reducers: {
    setItem(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSushi.pending, (state) => {
        state.status = "loading";
        state.items = [];
      })
      .addCase(fetchSushi.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
      })
      .addCase(fetchSushi.rejected, (state) => {
        state.status = "error";
        state.items = [];
      });
  },
});

export const { setItem } = sushiSlice.actions;
export default sushiSlice.reducer;
