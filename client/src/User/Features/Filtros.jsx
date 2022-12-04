import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
<<<<<<< HEAD
import {
  getGender,
  getCategory,
  getByPrice,
  getByColor,
} from "../../Redux/Reducer/allProductSlice";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
=======
import { getByPrice, getByFilters } from "../../Redux/Reducer/allProductSlice";
>>>>>>> 76067c91cfd75bc5ed2bc87e34870884f37afd5e

export const Filtros = () => {
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    gender: "",
    category: "",
    color: "",
  });

  useEffect(() => {
    dispatch(getByFilters(filters));
  }, [dispatch, filters]);

  function filterHandler(e) {
    const filterName = e.target.name;
    const filterValue = e.target.value;
    setFilters({ ...filters, [filterName]: filterValue });
    dispatch(getByFilters(filters));
  }
  function filterByPrice(e) {
    dispatch(getByPrice(e.target.value));
  }

  return (
    <Container fluid>
      {/* Aca van los filtros */}
      <div className="d-flex justify-content-between mb-5">
        <div>
<<<<<<< HEAD
          <select className="text-uppercase" onChange={filterByColor}>
=======
          <select
            className="uppercase font-noto-serif"
            onChange={filterHandler}
            name="color"
          >
>>>>>>> 76067c91cfd75bc5ed2bc87e34870884f37afd5e
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
<<<<<<< HEAD
          <select className="text-uppercase" onChange={filtroGender}>
            <option value="all">Gender</option>
=======
          <select
            className="uppercase font-noto-serif"
            onChange={filterHandler}
            name="gender"
          >
            <option value="">Gender</option>
>>>>>>> 76067c91cfd75bc5ed2bc87e34870884f37afd5e
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Both Genders</option>
          </select>
        </div>
        <div>
<<<<<<< HEAD
          <select className="text-uppercase" onChange={filterByPrice}>
            <option value="">Prices</option>
            <option value="ASC">Lowest price</option>
            <option value="DESC">Hightest price</option>
          </select>
        </div>
        <div>
          <select className="text-uppercase" onChange={filterCategory}>
=======
          <select
            className="uppercase font-noto-serif"
            onChange={filterHandler}
            name="category"
          >
>>>>>>> 76067c91cfd75bc5ed2bc87e34870884f37afd5e
            <option value="">Category</option>
            <option value="shirts">Shirt</option>
            <option value="t-shirts">T-shirt</option>
            <option value="foot">Shoes</option>
            <option value="jeans">jeans</option>
            <option value="jacket">Jackets</option>
          </select>
        </div>
        <div>
          <select
            className="uppercase font-noto-serif"
            onChange={filterByPrice}
          >
            <option value="">Prices</option>
            <option value="ASC">Lowest price</option>
            <option value="DESC">Highest price</option>
          </select>
        </div>
      </div>
    </Container>
  );
};
