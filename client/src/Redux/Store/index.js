import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Reducer/allProductSlice";
import productDetails from "../Reducer/productDetails";

export default configureStore({
  reducer: {
    allProducts: productReducer,
    details: productDetails,
  },
});
