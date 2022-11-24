import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  filter: false,
  error: "",
};

export const getGender = createAsyncThunk(
  "getGender/getGender",
  async (gender) => {
    return await fetch(`http://localhost:3001/product?gender=${gender}`).then(
      (respuesta) => respuesta.json()
    );
  }
);

const filterGenderSlice = createSlice({
  name: "filterGender",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGender.pending, (state) => {
      state.filter = false;
    });
    builder.addCase(getGender.fulfilled, (state, action) => {
      state.filter = true;
      state.allProducts = action.payload;
      state.error = "";
    });
    builder.addCase(getGender.rejected, (state, action) => {
      state.filter = false;
      state.allProducts = [];
      state.error = action.error.message;
    });
  },
});

export default filterGenderSlice.reducer;
