import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setAuth, setErrorAuth } from "../Reducer/authSlice";
import { restoreCart } from "../Reducer/cartSlice";

export const updateUser = (id, values) => async () => {
  console.log("id", id);
  console.log("values", values);
  await axios({
    method: "PUT",
    url: `http://localhost:3001/user/update/${id}`,
    values,
    data: values,
  });
};
export const updateProduct = (id, values) => async () => {
  await axios({
    method: "PUT",
    url: `http://localhost:3001/product/update/${id}`,
    values,
    data: values,
  });
};

export const formCreate = (data) => async () => {
  console.log("data en actions", data);
  await axios({
    method: "POST",
    url: `http://localhost:3001/product/createProduct`,
    data: data,
  });
};

export const formRegister = (data) => async () => {
  console.log("data en actions", data);
  await axios({
    method: "POST",
    url: `http://localhost:3001/user/newUser`,
    data: data,
  });
};

export const logIn = ({ email, password }) => {
  return function (dispatch) {
    return axios
      .post(`http://localhost:3001/logIn`, {
        email,
        password,
      })
      .then((response) => {
        const user = response;
        dispatch(setAuth(user.data[0]));
        console.log("cart:", user.data[1]);
        user.data[1] && dispatch(restoreCart(user.data[1])); //viene el carrito y lo muestro en vez de mostrarlo vacio
      })
      .catch((error) => {
        const messageError = error.response.data;
        dispatch(setErrorAuth(messageError));
      });
  };
};

export const googleAuth = createAsyncThunk(
  "googleAuth/googleAuth",
  async (credentials) => {
    console.log("credentials", credentials);
    return await axios
      .post(`http://localhost:3001/logIn/googleLogin`, { credentials })
      .then((response) => {
        const user = response;
        dispatch(setAuth(user.data[0]));
        console.log("cart:", user.data[1]);
        user.data[1] && dispatch(restoreCart(user.data[1]));
      })
      .catch((error) => {
        console.log(error);
        const messageError = error.response;
        dispatch(setErrorAuth(messageError));
      });
  }
);
