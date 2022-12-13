import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortByPrice, getByFilters } from "../../Redux/Reducer/allProductSlice";

export const Filtros = ({ orden, setCurrentPage }) => {
  const dispatch = useDispatch();
  const products = [...useSelector((state) => state.allProducts.allProducts)];
  const [filters, setFilters] = useState({
    gender: "",
    category: "",
    color: "",
  });

  useEffect(() => {
    if (
      filters.gender !== "" &&
      filters.category !== "" &&
      filters.color !== ""
    )
      console.log(page);
    dispatch(getByFilters(filters));
  }, [dispatch, filters]);

  function filterHandler(e) {
    const filterName = e.target.name;
    const filterValue = e.target.value;
    setFilters({ ...filters, [filterName]: filterValue });

    setCurrentPage(1);
    dispatch(getByFilters(filters));
    orden(`Ordenado ${e.target.value}`);
  }
  function sortingHandler(e) {
    if (e.target.value === "asc") {
      const sortedProducts = products?.sort((a, b) => a.price - b.price);
      setCurrentPage(1);
      dispatch(sortByPrice(sortedProducts));
      orden(`Ordenado ${e.target.value}`);
    }
    const sortedProducts = products?.sort((a, b) => b.price - a.price);
    dispatch(sortByPrice(sortedProducts));
    orden(`Ordenado ${e.target.value}`);
  }

  return (
    <div className="col-span-5 mt-5 mb-5">
      {/* Aca van los filtros */}
      <div className="flex flex-row justify-around">
        <div>
          <select
            className="uppercase font-noto-serif"
            onChange={filterHandler}
            name="color"
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
        <div>
          <select
            className="uppercase font-noto-serif"
            onChange={filterHandler}
            name="gender"
          >
            <option value="">Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Both Genders</option>
          </select>
        </div>
        <div>
          <select
            className="uppercase font-noto-serif"
            onChange={filterHandler}
            name="category"
          >
            <option value="">Category</option>
            <option value="shirts">Shirt</option>
            <option value="t-shirts">T-shirt</option>
            <option value="foot">Shoes</option>
            <option value="jeans">jeans</option>
            <option value="jackets">Jackets</option>
          </select>
        </div>
        <div>
          <select
            className="uppercase font-noto-serif"
            onChange={sortingHandler}
          >
            <option value="">Prices</option>
            <option value="asc">Lowest price</option>
            <option value="desc">Highest price</option>
          </select>
        </div>
      </div>
    </div>
  );
};
