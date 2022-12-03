import React from "react";
import { useDispatch } from "react-redux";
import {
  getGender,
  getCategory,
  getByPrice,
  getByColor,
} from "../../Redux/Reducer/allProductSlice";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

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
    <Container fluid>
      {/* Aca van los filtros */}
      <div className="d-flex justify-content-between mb-5">
        <div>
          <select className="text-uppercase" onChange={filterByColor}>
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
          <select className="text-uppercase" onChange={filtroGender}>
            <option value="all">Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Both Genders</option>
          </select>
        </div>
        <div>
          <select className="text-uppercase" onChange={filterByPrice}>
            <option value="">Prices</option>
            <option value="ASC">Lowest price</option>
            <option value="DESC">Hightest price</option>
          </select>
        </div>
        <div>
          <select className="text-uppercase" onChange={filterCategory}>
            <option value="">Category</option>
            <option value="shirts">Shirt</option>
            <option value="t-shirts">T-shirt</option>
            <option value="foot">Shoes</option>
            <option value="jeans">jeans</option>
            <option value="jacket">Jackets</option>
          </select>
        </div>
      </div>
    </Container>
  );
};
