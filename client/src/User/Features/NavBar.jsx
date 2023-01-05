import React, { useState, useRef } from "react";
import { ContainerLogIn } from "./ContainerLogIn";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
// import MenuContainer from "../../Admin/container/MenuCotainer";
// import LogoutIcon from "@mui/icons-material/Logout";
// import { logout } from "../../Redux/Reducer/authSlice";
// import { clearCart } from "../../Redux/Reducer/cartSlice";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBInputGroup,
  MDBCollapse,
} from "mdb-react-ui-kit";

import { getByName } from "../../Redux/Reducer/allProductSlice";
export default function NavBar() {
  const dispatch = useDispatch();
  const inputRef = useRef("");

  const filterUsers = () => {
    dispatch(getByName(inputRef.current.value));
  };
  const cart = useSelector((state) => state.cart.quantity);
  const [showBasic, setShowBasic] = useState(false);
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
    <MDBNavbar expand="md" bgColor="light">
      {auth.isAdmin === true ? (
        <MDBContainer fluid className="align-items-center">
          <MDBNavbarBrand>
            <Link to="/admin" className="text-decoration-none">
              ADMIN PANEL
            </Link>
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showBasic} className="flex-row">
            <MDBNavbarNav className="mb-0 mt-0 flex-row justify-content-center align-items-center">
              <MDBNavbarItem>
                {/* <MDBNavbarLink href="/home" tabIndex={-1} aria-disabled="true">
                  <MDBIcon fas icon="home" />
                </MDBNavbarLink> */}
                <MDBNavbarLink
                  active
                  aria-current="page"
                  href="/home"
                  style={{ color: "deepskyblue" }}
                >
                  <HomeIcon sx={{ fontSize: 45 }}></HomeIcon>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/cart" tabIndex={-1} aria-disabled="true">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={cart}>
                      <ShoppingCartIcon
                        sx={{ fontSize: 35 }}
                        style={{ color: "deepskyblue" }}
                      />
                    </StyledBadge>
                  </IconButton>
                  {/*   <IconButton aria-label="cart">
                    <StyledBadge badgeContent={cart} color="secondary">
                      <ShoppingCartIcon color="primary" />
                    </StyledBadge>
                  </IconButton> */}
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <ContainerLogIn />
              </MDBNavbarItem>
            </MDBNavbarNav>
            {/*  <form className="d-flex input-group w-auto">
              <input
                className="form-control"
                name="search"
                onChange={filterUsers}
                ref={inputRef}
                placeholder="Search Clothing..."
              />
            </form> */}
            <MDBInputGroup tag="form" className="d-flex w-auto">
              <input
                style={{ maxWidth: "300px" }}
                className="form-control"
                name="search"
                onChange={filterUsers}
                ref={inputRef}
                placeholder=" Search Clothing..."
                aria-label="Search"
                type="Search"
              />
            </MDBInputGroup>
          </MDBCollapse>
        </MDBContainer>
      ) : (
        <MDBContainer fluid>
          <MDBNavbarBrand>
            <span className="text-black">TIENDANUESTRA</span>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            className="text-black"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showBasic} className="flex-row">
            <MDBNavbarNav className="mb-0 mt-0 flex-row justify-content-center align-items-center">
              <MDBNavbarItem>
                <MDBNavbarLink
                  active
                  aria-current="page"
                  href="/home"
                  style={{ color: "deepskyblue" }}
                >
                  <HomeIcon sx={{ fontSize: 45 }}></HomeIcon>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/cart" tabIndex={-1} aria-disabled="true">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={cart}>
                      <ShoppingCartIcon
                        sx={{ fontSize: 35 }}
                        style={{ color: "deepskyblue" }}
                      />
                    </StyledBadge>
                  </IconButton>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <ContainerLogIn />
            </MDBNavbarNav>
            <MDBInputGroup tag="form" className="d-flex w-auto">
              <input
                style={{ maxWidth: "300px" }}
                className="form-control"
                name="search"
                onChange={filterUsers}
                ref={inputRef}
                placeholder=" Search Clothing..."
                aria-label="Search"
                type="Search"
              />
            </MDBInputGroup>
          </MDBCollapse>
        </MDBContainer>
      )}
    </MDBNavbar>
  );
}
