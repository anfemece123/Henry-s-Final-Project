// Bootstrap imports
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// React Imports
import React from "react";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import ContainerLogIn from "./ContainerLogIn";
// Externals Imports

import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

function Navigation() {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  const auth = useSelector((state) => state.auth.auth);

  return (
    <div>
      {auth.isAdmin === true ? (
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand>
              <Link className="text-decoration-none text-dark" to="/">
                TIENDA NUESTRA
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link>
                  <Link className="text-decoration-none text-dark" to="/home">
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    className="text-decoration-none text-dark"
                    to="/formRegister"
                  >
                    Register
                  </Link>
                </Nav.Link>
                <NavDropdown title="Session" id="navbarScrollingDropdown">
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link
                      className="text-decoration-none text-dark"
                      to="/login"
                    >
                      Sing-In
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      className="text-decoration-none text-dark"
                      to="/formRegister"
                    >
                      Register
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link>
                  <Link className="text-decoration-none text-dark" to="/cart">
                    Cart
                  </Link>
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <SearchBar />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand>
              <Link className="text-decoration-none text-dark" to="/">
                TIENDA NUESTRA
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link>
                  <Link className="text-decoration-none text-dark" to="/home">
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    className="text-decoration-none text-dark"
                    to="/formRegister"
                  >
                    Register
                  </Link>
                </Nav.Link>
                <NavDropdown title="Session" id="navbarScrollingDropdown">
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link
                      className="text-decoration-none text-dark"
                      to="/login"
                    >
                      Sing-In
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      className="text-decoration-none text-dark"
                      to="/formRegister"
                    >
                      Register
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link>
                  <Link className="text-decoration-none text-dark" to="/cart">
                    Cart
                  </Link>
                </Nav.Link>
              </Nav>
              {/* Modificar mas bonita */}
              <SearchBar />
              <ContainerLogIn />
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </div>
  );
}
export default Navigation;
