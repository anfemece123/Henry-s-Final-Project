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
  const admin = auth.isAdmin;

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      {auth.isAdmin === true ? (
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">Brand</MDBNavbarBrand>
          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <div>
            <Link to="/home">
              <HomeIcon sx={{ fontSize: 45 }}></HomeIcon>
            </Link>
            <SearchBar />
          </div>
          <div className="">
            <ContainerLogIn />
          </div>
        </MDBContainer>
      ) : (
        <MDBContainer fluid>
          <MDBNavbarBrand>
            <Link className="text-black text-decoration-none" to="/">
              TIENDANUESTRA
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
          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="#">
                  <Link to="/home">
                    <HomeIcon sx={{ fontSize: 45 }}></HomeIcon>
                  </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink>
                  <ContainerLogIn />
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink href="#" tabIndex={-1} aria-disabled="true">
                  <Link to="/cart">
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={cart} color="secondary">
                        <ShoppingCartIcon color="primary" />
                      </StyledBadge>
                    </IconButton>
                  </Link>
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
      )}
    </MDBNavbar>
  );
}
