import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-dark">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block"></div>
        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a
            href="https://github.com/anfemece123/Henry-s-Final-Project"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section>
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                TIENDA NUESTRA
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                cupiditate vel repudiandae libero, magnam quasi nemo alias
                eligendi exercitationem, neque soluta impedit porro labore,
                dolores modi tenetur quos esse eos.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Enlace
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Enlace
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Enlace
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Enlace
                </a>
              </p>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link to="/aboutUs" className="text-reset">
                  Developers
                </Link>
              </p>
              <p>
                <Link to="/formRegister" className="text-reset">
                  Register
                </Link>
              </p>
              <p>
                <Link to="/login" className="text-reset">
                  Log In
                </Link>
              </p>
              <p>
                <Link to="/cart" href="#!" className="text-reset">
                  Cart
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0)", color: "white" }}
      >
        © 2021 Copyright: &nbsp;
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          TIENDA NUESTRA
        </a>
      </div>
    </MDBFooter>
  );
}
