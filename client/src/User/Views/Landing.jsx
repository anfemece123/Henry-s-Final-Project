import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../Features/NavBar";
import girLanding from "../../Images/bg2.png";
import { Link } from "react-router-dom";
import Footer from "../Features/Footer";

import logo from "../../Images/logo.png";

export default function Landing() {
  return (
    <MDBContainer fluid className="mx-0">
      <MDBRow className="">
        <MDBCol
          style={{
            padding: 0,
          }}
        >
          <MDBRow>
            <NavBar />
          </MDBRow>
          <MDBRow
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dyfjoi0td/image/upload/v1671049872/ecommerce/pexels-ylanite-koppens-934064_6_rc0trb.jpg')",
              margin: 0,
              backgroundPosition: "center",
              backgroundRepeat: "no - repeat",
              backgroundSize: "cover",
              minHeight: "661px",
              alignItems: "center",
              paddingLeft: "5%",
            }}
          >
            <MDBCol className="d-flex flex-column mb-3">
              <img
                src={logo}
                className="mb-3"
                style={{ minWidth: "200px", maxWidth: "30vw", padding: 0 }}
              />
              <h1
                className="mb-3"
                style={{ marginBottom: 0, textAlign: "left", padding: 0 }}
              >
                The style, is your personality
              </h1>
              <MDBBtn
                className="mb-3"
                style={{ maxHeight: "100px", maxWidth: "180px" }}
              >
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/home"
                >
                  WATCH CATALOG
                </Link>
              </MDBBtn>
            </MDBCol>
          </MDBRow>
          <MDBRow className="">
            <MDBCol>
              <Footer />
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
