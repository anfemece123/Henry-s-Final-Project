import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import NavBar from "../Features/NavBar";
import { Link } from "react-router-dom";
import Footer from "../Features/Footer";

import logo from "../../Images/logo.png";

export default function Landing() {
  return (
    <MDBContainer fluid className="p-0 m-0">
      <MDBRow>
        <MDBCol>
          <MDBRow>
            <NavBar />
          </MDBRow>
          <MDBRow
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dyfjoi0td/image/upload/v1671049872/ecommerce/pexels-ylanite-koppens-934064_6_rc0trb.jpg')",
              margin: 0,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
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
                style={{ minWidth: "200px", maxWidth: "30vw" }}
              />
              <h1 className="mb-3 fw-bold" style={{ textAlign: "left" }}>
                The style, is your personality
              </h1>
              <Link to="/home">
                <MDBBtn
                  className="mb-3"
                  style={{ maxHeight: "100px", maxWidth: "180px" }}
                >
                  WATCH CATALOG
                </MDBBtn>
              </Link>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
      <MDBRow className="">
        <MDBCol>
          <Footer />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
