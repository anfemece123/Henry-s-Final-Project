import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Features/Card";
import {
  getAllProducts,
  getGender,
  getCategory,
  getByColor,
  getByPrice,
} from "../../Redux/Reducer/allProductSlice";
import NavBar from "../Features/NavBar";
import Loading from "../Features/Loading";
import Footer from "../Features/Footer";

export default function Home() {
  const product = useSelector((state) => state.allProducts);
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

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  if (product.loading) return <Loading />;
  if (!product.loading && product.error) return <h1>{product.error}</h1>;

  return (
    <div className="grid grid-cols-5 ">
      <div className="col-span-5">
        <NavBar />
      </div>
      <div className="col-span-5 mt-5 mb-2">
        <div className="text-center uppercase font-noto-serif text-3xl">
          <h1>Products</h1>
        </div>
      </div>
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
      <div className="col-span-5 flex flex-wrap gap-7 justify-center">
        {/* Aca van las Cards */}

        {product
          ? product.allProducts.map((element) => {
              return (
                <Card
                  id={element.id}
                  title={element.title}
                  price={element.price}
                  size={element.size}
                  gender={element.gender}
                  stock={element.stock}
                  images={element.image}
                />
              );
            })
          : null}
      </div>
      {/* Arreglar para que siempre quede fijo en el bottom */}
      <div className="mt-5 col-span-5">
        <Footer />
      </div>
    </div>
  );
}
