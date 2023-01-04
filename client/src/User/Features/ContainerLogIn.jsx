import React from "react";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import { useDispatch, useSelector } from "react-redux";
import ContainerMenuUser from "./ContainerMenuUser";
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

export const ContainerLogIn = () => {
  const auth = useSelector((state) => state.auth.auth);

  return (
    <>
      {Object.keys(auth) < 1 ? (
        <>
          <MDBNavbarItem>
            <MDBNavbarLink to="/formRegister">
              <MDBBtn color="primary" outline className="">
                Register
              </MDBBtn>
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink to="/login">
              <MDBBtn color="primary" outline className="">
                Log In
              </MDBBtn>
            </MDBNavbarLink>
          </MDBNavbarItem>
        </>
      ) : (
        <div className="w-full h-fit items-center flex gap-4">
          <ContainerMenuUser />
        </div>
      )}
    </>
  );
};
