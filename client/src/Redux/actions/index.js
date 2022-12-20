import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setAuth, setErrorAuth } from "../Reducer/authSlice";
import { restoreCart } from "../Reducer/cartSlice";

const url = "https://henry-s-final-project-backend-production.up.railway.app";

export const updateUser = (id, values) => async () => {
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
  await axios({
    method: "POST",
    url: `http://localhost:3001/product/createProduct`,
    data: data,
  });
};

export const formRegister = (data) => {
  return function (dispatch) {
    return axios({
      method: "POST",
      url: `http://localhost:3001/user/newUser`,
      data: data,
    })
      .then((response) => console.log(response))
      .catch((error) => {
        console.log(error.response.data);
        const errorMessage = error.response.data;
        return dispatch(setErrorAuth(errorMessage));
      });
  };
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
      .post(`http://localhost:3001/logIn/googleLogin`, { credentials })
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
