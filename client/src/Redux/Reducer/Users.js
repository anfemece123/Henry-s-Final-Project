import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allUsers: [],
  adminUser: [],
  userId: {},
  loading: false,
  error: "",
};
const url = "https://henry-s-final-project-backend-production.up.railway.app";
export const getAllusers = createAsyncThunk(
  "getAllusers/getAllusers",
  async () => {
    return await fetch(`${url}/user/allUsers`).then((response) =>
      response.json()
    );
  }
);

export const updateUser = createAsyncThunk(
  "updateUser/updateUser",
  async (id, input) => {
    console.log(id);
    return axios.put(`${url}/user/update/${id}`, input).then((response) => {
      const respuesta = response;
      console.log(`put user response => ${respuesta}`);
    });
  }
);
export const getByIdUser = createAsyncThunk(
  "getByIdUser/getByIdUser",
  async (id) => {
    return await fetch(`${url}/user/${id}`).then((respuesta) =>
      respuesta.json()
    );
  }
);
export const deleteUserId = createAsyncThunk(
  "deleteUserId/deleteUserId",
  async (id) => {
    console.log(`id para borrar => ${id}`);
    return await axios.put(`${url}/user/delete/${id}`);
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    //!getbyid
    builder.addCase(getByIdUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userId = action.payload;
      state.error = "";
      console.log("userId", state.userId);
    });
    builder.addCase(getAllusers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllusers.fulfilled, (state, action) => {
      state.loading = false;
      state.allUsers = action.payload;
      state.error = "";
    });
    builder.addCase(getAllusers.rejected, (state, action) => {
      state.loading = false;
      state.allUsers = [];
      state.error = action.error.message;
    });
  },
});

export default usersSlice.reducer;
