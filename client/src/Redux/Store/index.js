import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Reducer/allProductSlice";
import productDetails from "../Reducer/productDetails";
import genderReducer from "../Reducer/filtersReducer";
export default configureStore({
  reducer: {
    allProducts: productReducer,
    details: productDetails,
    filterGender: genderReducer,
  },
});
