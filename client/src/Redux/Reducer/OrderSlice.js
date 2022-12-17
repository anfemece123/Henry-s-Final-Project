import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  allOrders: [],
  loading: false,
  error: "",
};
const url = "https://henry-s-final-project-backend-production.up.railway.app";
export const getAllOrders = createAsyncThunk(
  "getAllOrders/getAllOrders",
  async () => {
    return await fetch(`${url}/order/allOrders`).then((response) =>
      response.json()
    );
  }
);

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllOrders.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.allOrders = action.payload;
      state.error = "";
    });
    builder.addCase(getAllOrders.rejected, (state, action) => {
      state.loading = false;
      state.allOrders = [];
      state.error = action.error.message;
    });
  },
});

export default ordersSlice.reducer;
