import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import NavBar from "../Features/NavBar";
import Loading from "../Features/Loading";
import Footer from "../Features/Footer";
import { ErrorSearch } from "../Features/ErrorSearch";
import { Filtros } from "../Features/Filtros";
import { getAllProducts } from "../../Redux/Reducer/allProductSlice";
import Card from "../Features/Card";
import Stack from "@mui/material/Stack";
import Paginado from "../Features/Paginado";

export default function Home() {
  const product = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  const productPaginado = useSelector((state) => state.allProducts.allProducts);

  // Paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const [orden, setOrden] = useState("");
  const currentProduct = productPaginado.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Paginado

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <>
      <div className="col-span-4">
        <NavBar />
      </div>

      <div className="col-span-4 text-center text-slate-700 font-cursive-titles text-5xl mt-2">
        <h1>Products</h1>
      </div>
      <Filtros orden={orden} setCurrentPage={setCurrentPage} />
      <div className="grid grid-cols-3 gap-4 justify-items-center items-center">
        {product.loading && <Loading />}
        {product.error && <ErrorSearch />}

        {currentProduct
          ? currentProduct.map((element) => {
              return (
                <Card
                  key={element.id}
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

      <div>
        <Stack spacing={1}>
          <Paginado
            productsPerPage={productsPerPage}
            productPaginado={productPaginado.length}
            currentPage={currentPage}
            paginado={paginado}
          />
        </Stack>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
