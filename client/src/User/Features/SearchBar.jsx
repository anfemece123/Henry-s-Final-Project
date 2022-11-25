import { React, useState } from "react";

import { useDispatch } from "react-redux";
import { getByName } from "../../Redux/Reducer/allProductSlice";

export default function SearchBar() {
  const [input, setInput] = useState("");

  // const allProducts = useSelector((state) => state.allProducts);
  // console.log("prodcuts", allProducts2);
  const dispatch = useDispatch();

  const handleInputChange = function (e) {
    e.preventDefault();
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (
    //   allProducts.find((e) => e.title.toLowerCase() !== input.toLowerCase())
    // ) {
    //   alert("El pokemon no existe");
    // } else {
    dispatch(getByName(input));
    setInput("");
    // }
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className=" flex items-center hover:border-2"
    >
      <input
        className="border-none rounded hover:border-none"
        name="search"
        onChange={(e) => handleInputChange(e)}
        value={input}
      ></input>

      <button
        type="submit"
        className="flex h-fit justify-center items-center hover:border-transparent"
      >
        Buscar
      </button>
      {/* {input.search && <h1> este sería el autocomplete </h1>} */}
    </form>
  );
}
