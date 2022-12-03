import React, { useEffect } from "react";

import Footer from "../Features/Footer";
import Navigation from "../Features/Navigation";
import style from "../../Assets/globalStyles.module.css";
import CarouselLan from "../Features/CarouselLan";
import { getAllProducts } from "../../Redux/Reducer/allProductSlice";
import { useDispatch } from "react-redux";
// Bootstrap imports

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Button from "react-bootstrap/Button";

export default function Landing() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <Container fluid className={`${style.landingContainer}`}>
      <Row>
        <Navigation />
      </Row>
      <Row lg={2} md={2} xs={1} className="mt-5">
        <Col>
          <CarouselLan />
        </Col>
        <Col className="d-flex align-items-center justify-content-center text-dark">
          <div>
            <h1>La ropa, es el estilo de tu personalidad</h1>
            <div className="pt-5">
              <Button>Ver catalogo</Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row lg={1} md={1}>
        <Col className="fixed-bottom">
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}
