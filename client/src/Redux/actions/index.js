import axios from "axios";

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
        const user = response.data;
        window.localStorage.setItem("loggedUser", JSON.stringify(user));
        dispatch({
          type: "LOGIN",
          payload: user,
        });
      })
      .catch((error) => {
        const messageError = error.response.data;
        dispatch({
          type: "LOGIN",
          payload: messageError,
        });
      });
  };
};
