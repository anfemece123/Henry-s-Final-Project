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

      console.log("arrPRICE", action.payload.price);

      state.products = removeItem;
      state.quantity = state.products.length;
      state.total = action.payload.price;
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
