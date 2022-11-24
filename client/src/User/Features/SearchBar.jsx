import {React, useState} from "react";


import { useDispatch, } from 'react-redux'



export default function SearchBar() {

  const [input, setInput] = useState({
    search: "",
  });

  const dispatch = useDispatch()

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (search, e) => {
    e.preventDefault()
    /* dispatch(getAllClothes(search)) */
    // navigate(`/searchResults/`)
  }   



  return <form className=" flex items-center hover:border-2">

      <input
        className="border-none rounded hover:border-none"
        name="search"
        onChange={handleInputChange}
        value={input.search}
      ></input>
      

      <button onClick={(e) => handleSubmit(input.search, e)}
      className="flex h-fit justify-center items-center hover:border-transparent">
        Buscar
      </button >
      {input.search && <h1> este sería el autocomplete </h1>}
      </form>
}
