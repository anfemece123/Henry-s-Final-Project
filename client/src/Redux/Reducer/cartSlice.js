import { createSlice } from "@reduxjs/toolkit";
import swal from "sweetalert";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const checkRepeat = state.products.some(
        (e) => e.id === action.payload.id
      );
      console.log("details", state.products);
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
    clearCart: (state, action) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },

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
});

export const {
  addProduct,
  removeProduct,
  clearCart,
  addQuantity,
  removeQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
