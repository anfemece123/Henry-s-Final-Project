import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Reducer/allProductSlice";
export default configureStore({
  reducer: {
    allProducts: productReducer,
  },
});
