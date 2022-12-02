// • http://localhost:3001/user/allUsers

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  allUsers: [],
  loading: false,
  error: false,
};

export const getAllUsers = createAsyncThunk("getUsers/getUsers", async () => {
  return await fetch(`http://localhost:3001/user/allUsers`).then((response) =>
    response.json()
  );
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.allUsers = action.payload;
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.allUsers = [];
    });
  },
});

export default usersSlice.reducer;
