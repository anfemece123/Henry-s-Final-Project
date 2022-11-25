import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Features/Card";
import {
  getAllProducts,
  getGender,
  getCategory,
} from "../../Redux/Reducer/allProductSlice";
import NavBar from "../Features/NavBar";
import Loading from "../Features/Loading";

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

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  if (product.loading) return <Loading />;
  if (!product.loading && product.error) return <h1>{product.error}</h1>;

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <div>
          <h1>Products</h1>
        </div>
        <div>
          {/* Aca van los filtros */}
          <div className="border-none font-serif text-2xl">
            <select>
              <option>Color</option>
              <option value="White">White</option>
              <option value="Black">Black</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Yellow">Yellow</option>
              <option value="Green">Green</option>
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
            <select onChange={filtroGender}>
              <option>Filter products</option>
              <option value="Newest">Newest</option>
              <option value="Discount">Discount</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="Price">Price</option>
            </select>
          </div>
          <div>
            <select onChange={filterCategory}>
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
      <div>
        {/* Aca van las Cards */}
        <div>
          {product
            ? product.allProducts.map((element) => {
                return (
                  <div>
                    <Card
                      id={element.id}
                      title={element.title}
                      // color={element.color}
                      price={element.price}
                      // size={element.size}
                      // gender={element.gender}
                      stock={element.stock}
                      category={element.category}
                      images={element.image}
                      thumbnail={element.thumbnail}
                    />
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}
