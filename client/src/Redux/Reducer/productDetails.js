import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  details: {},
  loading: false,
  error: "",
};
const url = "https://henry-s-final-project-backend-production.up.railway.app";
export const getProductDetails = createAsyncThunk(
  "getProductDetails/getProductDetails",
  async (id) => {
    return await fetch(`${url}/product/${id}`).then((respuesta) => {
      console.log(respuesta);
      return respuesta.json();
    });
  }
);

const detailsSlice = createSlice({
  name: "details",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProductDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.details = action.payload;
      state.error = "";
    });
    builder.addCase(getProductDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.details = [];
    });
  },
});

export default detailsSlice.reducer;
