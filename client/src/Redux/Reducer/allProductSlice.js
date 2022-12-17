import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
/* import getProductsFiltered from "../../Controllers/utils"; */
const initialState = {
  allProducts: [],
  allProductsFiltered: [],
  productId: {},
  loading: false,
  error: false,
};

const url = "https://henry-s-final-project-backend-production.up.railway.app";
export const getAllProducts = createAsyncThunk(
  "getAllProducts/getAllProducts",
  async () => {
    return await fetch(`${url}/product/allProducts`).then((response) =>
      response.json()
    );
  }
);

export const getByName = createAsyncThunk(
  "getByName/getByName",
  async (name) => {
    return await fetch(`${url}/product/search?title=${name}`).then(
      (respuesta) => respuesta.json()
    );
  }
);

export const getByFilters = createAsyncThunk(
  "getByFilters/getByFilters",
  async (filters) => {
    return await axios
      .post(`${url}/product/filtered`, filters)
      .then((respuesta) => respuesta.data);
  }
);

export const sortByPrice = createAsyncThunk(
  "sortByPrice/sortByPrice",
  (product) => {
    return product;
  }
);
export const deleteProId = createAsyncThunk(
  "deleteProId/deleteProId",
  async (id) => {
    return await axios.delete(`${url}/product/delete/${id}`);
  }
);
export const getById = createAsyncThunk("getById/getById", async (id) => {
  return await fetch(`${url}/product/${id}`).then((respuesta) =>
    respuesta.json()
  );
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    //?productEdit
    //?productById
    builder.addCase(getById.fulfilled, (state, action) => {
      state.loading = false;
      state.productId = action.payload;
      state.error = "";
    });
    //?DeleteProduct
    builder.addCase(deleteProId.fulfilled, (state, action) => {
      const delProduct = state.allProducts.filter(
        (e) => e.id !== action.payload.data
      );
      state.loading = false;
      state.allProducts = [...delProduct];
      state.error = "";
    });
    //?getAllProducts
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
      state.error = "";
    });
    //?getByFilters
    builder.addCase(getByFilters.fulfilled, (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;

      state.error = "";
    });
    builder.addCase(getByFilters.rejected, (state, action) => {
      state.loading = false;
      state.allProducts = [];

      state.error = true;
    });
    //?getByPrice
    builder.addCase(sortByPrice.fulfilled, (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
      state.error = "";
    });
    builder.addCase(sortByPrice.rejected, (state, action) => {
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
