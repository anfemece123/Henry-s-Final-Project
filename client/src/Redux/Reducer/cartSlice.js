import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import swal from "sweetalert";

const initialState = {
  products: [],
  quantity: 0,
  total: 0,
};
const url = "https://henry-s-final-project-backend-production.up.railway.app";
export const clearCart = createAsyncThunk(
  "clearCart/clearCart",
  async (idUser) => {
    return await axios
      .delete(`${url}/cart/delete/${idUser}`)
      .then((respuesta) => console.log(respuesta))
      .catch((respuesta) => console.log(respuesta));
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    restoreCart: (state, action) => {
      state.quantity = action.payload.products_quantity;
      state.products = action.payload.products;
      state.total = action.payload.total;
    },
    addProduct: (state, action) => {
      const checkRepeat = state.products.some(
        (e) => e.id === action.payload.id
      );
      if (checkRepeat === false) {
        state.quantity += 1;
        state.products.push(action.payload);
        state.total += action.payload.price;
      } else {
        swal({
          title: "Be carefull!",
          text: "Product already in the cart!",
          icon: "info",
        });
      }
    },
    removeProduct: (state, action) => {
      const removeItem = state.products.filter(
        (i, index) => index !== action.payload.remove
      );
      state.products = removeItem;
      state.quantity = state.products.length;
      state.total = state.products.reduce(
        (acumulador, actual) => acumulador + actual.price,
        0
      );
    },
    clearCart: (state, action) => {},
    addQuantity: (state, action) => {
      const find1 = state.products.find(
        (element) => element.id === action.payload.id
      );

      if (find1) {
        state.products = state.products.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                price: item.price + item.price2,
              }
            : item
        );
        state.total = state.products.reduce(
          (acumulador, actual) => acumulador + actual.price,
          0
        );
      }
    },
    removeQuantity: (state, action) => {
      // const mapeo = state.products.map((e) => e.quantity);
      // console.log("mapeo", mapeo);
      // const indice = 0;
      // mapeo[indice] = 14;
      // state.products = mapeo;
      const find1 = state.products.find(
        (element) => element.id === action.payload.id
      );

      if (find1) {
        state.products = state.products.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity - 1,
                price: item.price - item.price2,
              }
            : item
        );
        state.total = state.products.reduce(
          (acumulador, actual) => acumulador + actual.price,
          0
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(clearCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(clearCart.fulfilled, (state, action) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    });
  },
});

export const {
  addProduct,
  removeProduct,
  addQuantity,
  removeQuantity,
  restoreCart,
} = cartSlice.actions;

export default cartSlice.reducer;
