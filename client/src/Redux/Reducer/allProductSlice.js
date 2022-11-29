import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
/* import getProductsFiltered from "../../Controllers/utils"; */
const initialState = {
  allProducts: [],
  allProductsFiltered: [],
  loading: false,
  error: false,
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
    return await fetch(
      `http://localhost:3001/product/search?title=${name}`
    ).then((respuesta) => respuesta.json());
  }
);

export const getGender = createAsyncThunk(
  "getGender/getGender",
  async (gender /* , allProductsFiltered */) => {
    return await fetch(
      `http://localhost:3001/product/byGender?gender=${gender}`
    ).then(
      (respuesta) => respuesta.json() /* {
      const productsByGender = respuesta.json();
      console.log(productsByGender);
      const productsFiltered = getProductsFiltered(
        allProductsFiltered,
        productsByGender
      );
      return productsFiltered;
    } */
    );
  }
);

export const getCategory = createAsyncThunk(
  "getCategory/getCategory",
  async (category) => {
    return await fetch(
      `http://localhost:3001/product/byCategory?category=${category}`
    ).then((response) => response.json());
  }
);

export const getByPrice = createAsyncThunk(
  "getByPrice/getByPrice",
  async (price) => {
    return await fetch(
      `http://localhost:3001/product/byPriceOrder?order=${price}`
    ).then((response) => response.json());
  }
);

export const getByColor = createAsyncThunk(
  "getByColor/getByColor",
  async (color) => {
    return await fetch(
      `http://localhost:3001/product/byColor?color=${color}`
    ).then((response) => response.json());
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    //?getAllProducts
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
      /* state.allProductsFiltered = action.payload; */
      state.error = "";
    });
    //?getGender
    builder.addCase(getGender.fulfilled, (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
      state.error = "";
    });
    builder.addCase(getGender.rejected, (state, action) => {
      state.loading = false;
      state.allProducts = [];
      state.error = true;
    });
    //?getCategory
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
      state.error = "";
    });
    builder.addCase(getCategory.rejected, (state, action) => {
      state.loading = false;
      state.allProducts = [];
      state.error = true;
    });
    //?getByPrice
    builder.addCase(getByPrice.fulfilled, (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
      state.error = "";
    });
    builder.addCase(getByPrice.rejected, (state, action) => {
      state.loading = false;
      state.allProducts = [];
      state.error = true;
    });
    //?getByColor
    builder.addCase(getByColor.fulfilled, (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
      state.error = "";
    });
    builder.addCase(getByColor.rejected, (state, action) => {
      state.loading = false;
      state.allProducts = [];
      state.error = true;
    });
    //?getByName
    builder.addCase(getByName.fulfilled, (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
      state.error = "";
    });
    builder.addCase(getByName.rejected, (state, action) => {
      state.loading = false;
      state.allProducts = [];
      state.error = true;
    });
  },
});

export default productsSlice.reducer;
