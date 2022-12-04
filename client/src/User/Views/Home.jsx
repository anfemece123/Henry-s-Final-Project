import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navigation from "../Features/Navigation";
import Loading from "../Features/Loading";
import Footer from "../Features/Footer";
import { ErrorSearch } from "../Features/ErrorSearch";
import { Filtros } from "../Features/Filtros";
import { getAllProducts } from "../../Redux/Reducer/allProductSlice";
import PaginatedItems from "../Features/ReactPaginate";
<<<<<<< HEAD
import style from "../../Assets/globalStyles.module.css";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
=======
import { ContainerLogIn } from "../Features/ContainerLogIn";
>>>>>>> 76067c91cfd75bc5ed2bc87e34870884f37afd5e

export default function Home() {
  const product = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
<<<<<<< HEAD
    <Container fluid className={style.home}>
      <Row>
        <Col xl={12}>
          <Navigation />
        </Col>
        <Col xl={12} className="text-center">
          <h1>Products</h1>
        </Col>
        <Col xl={12} className="mt-5">
          <Filtros />
        </Col>
        <Col xl={12}>
          {product.loading && <Loading />}
          {product.error && <ErrorSearch />}
          <PaginatedItems itemsPerPage={6} />
        </Col>
        <Col xl={12} className="position-relative">
          <div className="fixed-bottom">
            <Footer />
          </div>
        </Col>
      </Row>
    </Container>
=======
    <div className="grid grid-cols-4 min-w-screen min-h-screen">
      <div className="col-span-4">
        <NavBar />
      </div>

      <div className="col-span-4 text-center text-slate-700 font-cursive-titles text-5xl mt-5">
        <h1>Products</h1>
      </div>
      <Filtros />
      <div className="col-span-4">
        {product.loading && <Loading />}
        {product.error && <ErrorSearch />}

        <PaginatedItems itemsPerPage={6} />
      </div>
      <div className="col-span-4">
        <Footer />
      </div>
    </div>
>>>>>>> 76067c91cfd75bc5ed2bc87e34870884f37afd5e
  );
}
