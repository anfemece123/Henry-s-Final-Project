import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  loading: false,
  error: "",
};

export const getAllProducts = createAsyncThunk(
  "getAllProducts/getAllProducts",
  async () => {
    return await fetch(`http://localhost:3001/product/allProducts`).then(
      (response) => response.json()
    );
  }
);

export const getByName = createAsyncThunk(
  "getByName/getByName",
  async (name) => {
    console.log("getname", name);
    return await fetch(
      `http://localhost:3001/product/search?title=${name}`
    ).then((respuesta) => respuesta.json());
  }
);

export const getGender = createAsyncThunk(
  "getGender/getGender",
  async (gender) => {
    return await fetch(`http://localhost:3001/product?gender=${gender}`).then(
      (respuesta) => respuesta.json()
    );
  }
);

export const getCategory = createAsyncThunk(
  "getCategory/getCategory",
  async (category) => {
    return await fetch(
      `http://localhost:3001/product/category?category=${category}`
    ).then((response) => response.json());
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
      state.error = "";
    });
    builder.addCase(getByName.fulfilled, (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
      state.error = "";
    });
    builder.addCase(getGender.fulfilled, (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
      state.error = "";
    });
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
      state.error = "";
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.loading = false;
      state.allProducts = [];
      state.error = action.error.message;
    });
  },
});

export default productsSlice.reducer;
