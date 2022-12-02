import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Reducer/allProductSlice";
import productDetails from "../Reducer/productDetails";
import cartSlice from "../Reducer/cartSlice";
import userSlice from "../Reducer/allUsersSlice";

export default configureStore({
  reducer: {
    allProducts: productReducer,
    details: productDetails,
    cart: cartSlice,
    users: userSlice,
  },
});
