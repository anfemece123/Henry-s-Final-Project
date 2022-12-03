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
import style from "../../Assets/globalStyles.module.css";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Home() {
  const product = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
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
  );
}
