import React from "react";
import { useDispatch } from "react-redux";
import {
  getGender,
  getCategory,
  getByPrice,
  getByColor,
} from "../../Redux/Reducer/allProductSlice";

export const Filtros = () => {
  const dispatch = useDispatch();

  function filtroGender(e) {
    e.preventDefault();
    dispatch(getGender(e.target.value));
  }

  function filterCategory(e) {
    e.preventDefault();
    dispatch(getCategory(e.target.value));
  }
  function filterByPrice(e) {
    e.preventDefault();
    dispatch(getByPrice(e.target.value));
  }
  function filterByColor(e) {
    e.preventDefault();
    dispatch(getByColor(e.target.value));
  }

  return (
    <div className="col-span-5 mt-5 mb-5">
      {/* Aca van los filtros */}
      <div className="flex flex-row justify-around">
        <div>
          <select
            className="bg-transparent uppercase font-noto-serif"
            onChange={filterByColor}
          >
            <option value="">Color</option>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
          </select>
        </div>
        {/* <div className="border-none font-serif text-2xl">
        <select>
          <option>Size</option>
          <option value="2XS">2XS</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="2XL">2XL</option>
          <option value="3XL">3XL</option>
          <option value="4XL">4XL</option>
        </select>
      </div> */}
        <div>
          <select
            className="bg-transparent uppercase font-noto-serif"
            onChange={filtroGender}
          >
            <option value="">Filter products</option>
            <option value="Newest">Newest</option>
            <option value="Discount">Discount</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
        <div>
          <select
            className="bg-transparent uppercase font-noto-serif"
            onChange={filterByPrice}
          >
            <option value="">Prices</option>
            <option value="ASC">Hightest price</option>
            <option value="DESC">Lowest price</option>
          </select>
        </div>
        <div>
          <select
            className="uppercase bg-transparent font-noto-serif"
            onChange={filterCategory}
          >
            <option value="">Category</option>
            <option value="shirts">Shirt</option>
            <option value="t-shirts">T-shirt</option>
            <option value="foot">Shoes</option>
            <option value="jeans">jeans</option>
            <option value="jacket">Jackets</option>
          </select>
        </div>
      </div>
    </div>
  );
};
