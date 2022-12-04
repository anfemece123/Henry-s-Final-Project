import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Reducer/allProductSlice";
import productDetails from "../Reducer/productDetails";
import cartSlice from "../Reducer/cartSlice";
import authSlice from "../Reducer/authSlice";

import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
// import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

/*
  Aca se ubican los estados globales, donde les damos acceso a todos los componentes que esten por debajo del store
  por ejemplo: dentro del reducer se ubicarian los estados de "workers", "works", "popularWorkers", etc ...
*/

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "auth"],
};
const rootReducer = combineReducers({
  allProducts: productReducer,
  details: productDetails,
  cart: cartSlice,
  auth: authSlice,
});

const persistReducers = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistReducers,
  middleware: [thunk],
});

export const persistor = persistStore(store);
