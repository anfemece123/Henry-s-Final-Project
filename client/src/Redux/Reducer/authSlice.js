import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: {},
    errorAuth: "",
  },

  reducers: {
    setAuth: (state, action) => {
      console.log("auth", state.auth);
      // console.log(,loggedUserJSON);
      state.auth = action.payload;
    },
    logout: (state, action) => {
      state.auth = {};
    },

    setErrorAuth: (state, action) => {
      state.errorAuth = action.payload;
    },

    errorRemove: (state, action) => {
      state.errorAuth = "";
    },
  },
});

export const { setAuth, logout, setErrorAuth, errorRemove } = authSlice.actions;
export default authSlice.reducer;
