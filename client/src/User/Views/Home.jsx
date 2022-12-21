import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import NavBar from "../Features/NavBar";
import Loading from "../Features/Loading";
import Footer from "../Features/Footer";
import { ErrorSearch } from "../Features/ErrorSearch";
import { Filtros } from "../Features/Filtros";
import { getAllProducts } from "../../Redux/Reducer/allProductSlice";
import Card from "../Features/Card";

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
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol size={12}>
          <NavBar />
        </MDBCol>
        <MDBCol size={12} className="d-flex justify-content-center">
          <Filtros setOrden={setOrden} setCurrentPage={setCurrentPage} />
        </MDBCol>
        <MDBCol
          size={12}
          className="d-flex flex-wrap justify-content-center gap-5"
        >
          {product.loading && <Loading />}
          {product.error && <ErrorSearch />}
          {currentProduct
            ? currentProduct.map((element, index) => {
                return (
                  <Card
                    key={index}
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
        </MDBCol>
        <MDBCol size={12} className="d-flex justify-content-center mt-5 mb-5">
          <Paginado
            productsPerPage={productsPerPage}
            productPaginado={productPaginado.length}
            currentPage={currentPage}
            paginado={paginado}
          />
        </MDBCol>
        <MDBCol size={12}>
          <Footer />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
