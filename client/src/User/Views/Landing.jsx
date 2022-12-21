import React from "react";
import { MDBContainer, MDBRow, MDBrow } from "mdb-react-ui-kit";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../Features/NavBar";
import girLanding from "../../Images/bg2.png";
import { Link } from "react-router-dom";
import Footer from "../Features/Footer";

import logo from "../../Images/logo.png";

export default function Landing() {
  return (
    <Container
      className="grid"
      style={{
        margin: 0,
        padding: 0,
      }}
    >
      <Row
        className=""
        style={{
          margin: 0,
        }}
      >
        <Col
          style={{
            margin: 0,
          }}
        >
          <NavBar />
        </Col>
      </Row>
      <Row
        className="bg-image img-fluid"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dyfjoi0td/image/upload/v1671049872/ecommerce/pexels-ylanite-koppens-934064_6_rc0trb.jpg')",
          margin: 0,
        }}
      >
        <Col
          style={{
            margin: 0,
          }}
        >
          <img src={logo} className="" />
          <div className="">
            <div className="">
              <h1>The style, is your personality</h1>
            </div>
            <div className="">
              <button className="">
                <Link to="/home">WATCH CATALOG</Link>
              </button>
            </div>
          </div>
        </Col>
      </Row>
      {/*       <Row className="">
        <Footer />
      </Row> */}
    </Container>
  );
}

{
  /* <Container fluid="lg" className="border border-2">
  <Row>
    <row lg={12}>row</row>
    <row lg={6} md={6}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, totam
      assumenda rerum in est inventore quam fuga atque, eum perferendis nam
      molestias debitis fugit? Praesentium officiis voluptate enim alias neque.
    </row>
    <row lg={6} md={6}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A pariatur
      perferendis molestias est laudantium eaque sapiente. Nihil soluta
      deserunt, facere dolor aliquid in, culpa voluptas temporibus sed
      dignissimos repellendus nemo?
    </row>
    <row lg={8}>row</row>
    <row lg={10}>row</row>
    <row>row</row>
  </Row>
</Container>; */
}
