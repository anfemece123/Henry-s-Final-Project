import axios from "axios";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  stars: [],
  allReview: [],
  error: "",
};

export const getProductReview = createAsyncThunk(
  "getProductReview/getProductReview",
  async (reviews, id) => {
    return await axios
      .post(`ruta donde tengo que enviarlo`)
      .then((response) =>
        console.log(`Respuesta del back review => ${response}`)
      );
  }
);

const reviewSlice = createSlice({
  name: "review",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProductReview.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductReview.fulfilled, (state, action) => {
      state.loading = false;
      state.allReview = action.payload;
      state.error = "";
    });
    builder.addCase(getProductReview.rejected, (state, action) => {
      state.loading = false;
      state.allReview = [];
      state.error = action.error.message;
    });
  },
});

export default reviewSlice.reducer;
