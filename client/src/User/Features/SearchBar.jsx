import { React, useRef } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../Redux/Reducer/allProductSlice";

export default function SearchBar() {
  const dispatch = useDispatch();
  const inputRef = useRef("");

  const filterUsers = () => {
    dispatch(getByName(inputRef.current.value));
  };

  return (
    <>
      <input
        className="border-none rounded hover:border-none"
        name="search"
        onChange={filterUsers}
        ref={inputRef}
        placeholder="Search Clothing..."
      />
    </>
  );
}
