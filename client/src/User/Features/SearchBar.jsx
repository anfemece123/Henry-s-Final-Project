import * as React from "react";
import { useRef } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { useDispatch, useSelector } from "react-redux";
import { getByName } from "../../Redux/Reducer/allProductSlice";

export default function SearchBar() {
  const products = useSelector((state) => state.allProducts.allProducts);
  const dispatch = useDispatch();
  const inputRef = useRef("");
  const top100Films = [];
  products.map((element) => {
    return top100Films.push(element.title);
  });

  const filterUsers = () => {
    dispatch(getByName(inputRef.current.value));
  };
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      onChange={filterUsers}
      ref={inputRef}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}
