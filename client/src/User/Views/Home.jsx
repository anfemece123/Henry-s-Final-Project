import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Features/Card";
import NavBar from "../Features/NavBar";
import Loading from "../Features/Loading";
import Footer from "../Features/Footer";
import { ErrorSearch } from "../Features/ErrorSearch";
import { Filtros } from "../Features/Filtros";
import { getAllProducts } from "../../Redux/Reducer/allProductSlice";

export default function Home() {
  const product = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

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
      <Filtros />

      <div className="col-span-5 flex flex-wrap gap-7 justify-center">
        {/* Aca van las Cards */}
        {product.loading && <Loading />}
        {product.error && <ErrorSearch />}
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
