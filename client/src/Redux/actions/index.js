import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setAuth, setErrorAuth } from "../Reducer/authSlice";
import { restoreCart } from "../Reducer/cartSlice";

const url = "https://henry-s-final-project-backend-production.up.railway.app";

export const updateUser = (id, values) => async () => {
  await axios({
    method: "PUT",
    url: `${url}/user/update/${id}`,
    values,
    data: values,
  });
};

export const updateProduct = (id, values) => async () => {
  await axios({
    method: "PUT",
    url: `${url}/product/update/${id}`,
    values,
    data: values,
  });
};

export const formCreate = (data) => async () => {
  await axios({
    method: "POST",
    url: `${url}/product/createProduct`,
    data: data,
  });
};

export const formRegister = (data) => async () => {
  await axios({
    method: "POST",
    url: `${url}/user/newUser`,
    data: data,
  });
};

export const logIn = ({ email, password }) => {
  return function (dispatch) {
    return axios
      .post(`${url}/logIn`, {
        email,
        password,
      })
      .then((response) => {
        const user = response;
        dispatch(setAuth(user.data[0]));
        user.data[1] && dispatch(restoreCart(user.data[1])); //viene el carrito y lo muestro en vez de mostrarlo vacio
      })
      .catch((error) => {
        const messageError = error.response.data;
        dispatch(setErrorAuth(messageError));
      });
  };
};

export const googleAuth = (credentials) => {
  return function (dispatch) {
    return axios
      .post(`${url}/logIn/googleLogin`, { credentials })
      .then((response) => {
        const user = response;
        dispatch(setAuth(user.data[0]));
        user.data[1] && dispatch(restoreCart(user.data[1]));
      })
      .catch((error) => {
        const messageError = error.response.data;
        dispatch(setErrorAuth(messageError));
      });
  };
};
