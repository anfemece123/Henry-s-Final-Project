import axios from "axios";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  stars: [],
  allReview: [],
  error: "",
};

export const createProductReview = createAsyncThunk(
  "createProductReview/createProductReview",
  async (reviewData) => {
    console.log("reviewData: ", reviewData);
    const productId = reviewData.productId;
    const token = reviewData.token;
    const calification = reviewData.calification;
    const comment = reviewData.comment;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return axios
      .post(
        `http://localhost:3001/review/newReview/${productId}`,
        {
          calification,
          comment,
        },
        config
      )
      .then((response) =>
        console.log(`Respuesta del back review => ${response.data}`)
      )
      .catch((error) => console.log(error));
  }
);

const reviewSlice = createSlice({
  name: "review",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createProductReview.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createProductReview.fulfilled, (state, action) => {
      state.loading = false;
      state.allReview = action.payload;
      state.error = "";
    });
    builder.addCase(createProductReview.rejected, (state, action) => {
      state.loading = false;
      state.allReview = [];
      state.error = action.error.message;
    });
  },
});

export default reviewSlice.reducer;
