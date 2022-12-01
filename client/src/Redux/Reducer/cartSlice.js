import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price;
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
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
