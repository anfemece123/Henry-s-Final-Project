import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Features/Card";
import { getAllProducts } from "../../Redux/Reducer/allProductSlice";
import Loading from "../Features/Loading";

export default function Home() {
  // Esto deberia de traer todos los productos del estado
  const product = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    // Esto deberia de invocar la action que trae todos los productos
    // Recordar que hay que importarla una vez creada.
    dispatch(getAllProducts());
  }, [dispatch]);
  if (product.loading) return <Loading />;
  return (
    <div className="container">
      <div>
        <div>
          <div>
            <h1>Dresses</h1>
          </div>
        </div>
        <div>
          <div>
            <h1>Filter products</h1>
          </div>
          <div>
            {/* Aca van los filtros */}
            <select>
              <option>Color</option>
              <option value="White">White</option>
              <option value="Black">Black</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Yellow">Yellow</option>
              <option value="Green">Green</option>
            </select>
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
            <select>
              <option>Filter products</option>
              <option value="Newest">Newest</option>
              <option value="Discount">Discount</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Price">Pirce</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <div>
          {/* Aca van las Cards */}
          {product
            ? product.allProducts.map((element) => {
                return (
                  <Card
                    id={element.id}
                    title={element.title}
                    // color={element.color}
                    price={element.price}
                    // size={element.size}
                    // gender={element.gender}
                    stock={element.stock}
                    category={element.category}
                    images={element.images}
                    thumbnail={element.thumbnail}
                  />
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}
