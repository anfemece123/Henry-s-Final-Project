import React, { useEffect, useState, useRef } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
// import MenuContainer from "../../Admin/container/MenuCotainer";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "../../Redux/Reducer/authSlice";
import { clearCart } from "../../Redux/Reducer/cartSlice";
import { ContainerLogIn } from "./ContainerLogIn";
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
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
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
        <MDBContainer fluid>
          <Link to="/admin">
            <MDBBtn className="text-black" color="light">
              Admin
            </MDBBtn>
          </Link>
          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="flex-row mr-auto mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink href="/home" tabIndex={-1} aria-disabled="true">
                  <MDBIcon fas icon="home" />
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <ContainerLogIn />
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink href="/cart" tabIndex={-1} aria-disabled="true">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={cart} color="secondary">
                      <ShoppingCartIcon color="primary" />
                    </StyledBadge>
                  </IconButton>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <form className="d-flex input-group w-auto">
              <input
                className="form-control"
                name="search"
                onChange={filterUsers}
                ref={inputRef}
                placeholder="Search Clothing..."
              />
            </form>
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
          <MDBCollapse navbar show={showBasic} className="flex-row ">
            <form className="d-flex input-group">
              <input
                style={{ maxWidth: "300px" }}
                className="form-control"
                name="search"
                onChange={filterUsers}
                ref={inputRef}
                placeholder="Search Clothing..."
              />
            </form>
            <MDBNavbarNav className="mb-0 mt-2 flex-row justify-content-end">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="/home">
                  <HomeIcon sx={{ fontSize: 45 }}></HomeIcon>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/cart" tabIndex={-1} aria-disabled="true">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={cart} color="secondary">
                      <ShoppingCartIcon color="primary" sx={{ fontSize: 35 }} />
                    </StyledBadge>
                  </IconButton>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink>
                  <ContainerLogIn />
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      )}
    </MDBNavbar>
  );
}
