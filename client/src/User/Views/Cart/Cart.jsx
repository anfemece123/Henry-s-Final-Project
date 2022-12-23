import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  addQuantity,
  clearCart,
  removeProduct,
  removeQuantity,
  setQuantity,
} from "../../../Redux/Reducer/cartSlice";
import emptyCart from "../../../Images/empty_cart.png";
import swal from "sweetalert";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import NavBar from "../../Features/NavBar";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { AlertTitle } from "@mui/material";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const Cart = () => {
  const dispatch = useDispatch();
  const infoCart = useSelector((state) => state.cart.products);
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth.auth);

  const priceDetail = useSelector((state) => state.details.details.price);

  const [warning, setWarning] = useState(false);
  const [open, setOpen] = useState(false);

  const deleteItemShopList = (e) => {
    dispatch(
      removeProduct({
        remove: e,
        price: infoCart.map((e) => e.price),
        quantity: cart.quantity,
      })
    );
  };

  const checkoutHandler = () => {
    if (Object.keys(auth) < 1) {
      swal({
        title: "You need to be logged in to continue",
        text: "You can create a new account or log in with an existing one!",
        icon: "warning",
        buttons: ["Create Account", "Log In"],
        dangerMode: true,
      }).then((value) => {
        if (value) {
          navigate("/login");
        } else {
          swal("You can make your account here!");
          navigate("/formRegister");
        }
      });
    } else {
      navigate("/pasarelaTest");
    }
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setWarning(false);
    setOpen(false);
  };

  const handleAddItem = (element) => {
    element.quantity < element.stock &&
      element.quantity > 0 &&
      dispatch(
        addQuantity({
          price: element.price,
          quantity: element.quantity,
          id: element.id,
          priceDetail: priceDetail,
        })
      );
    if (element.quantity === element.stock) setWarning(true);
  };

  const handleDeleteItem = (element) => {
    element.quantity > 1 &&
      dispatch(
        removeQuantity({
          price: element.price,
          quantity: element.quantity,
          id: element.id,
          priceDetail: priceDetail,
        })
      );
  };

  return (
    <MDBContainer fluid className="p-0 m-0" id="chec-div">
      <MDBRow fluid className="p-0 m-0">
        <MDBCol className="p-0 m-0">
          <NavBar />
        </MDBCol>
      </MDBRow>
      {/* <MDBRow className="" id="checkout"> */}
      <MDBRow fluid className="p-0 m-0" id="cart">
        <MDBCol
          className="p-0 m-0 d-flex flex-column justify-content-center align-items-center"
          size="4"
        >
          <Link
            className="d-flex flex-column justify-content-center align-items-center"
            to="/home"
          >
            <p className="text-center d-flex flex-column justify-content-center align-items-center">
              Continue Shopping
              <ArrowBackIcon />
            </p>
          </Link>
        </MDBCol>
        <MDBCol
          className="p-0 m-0 d-flex flex-column justify-content-center align-items-center"
          size="4"
        >
          <p className="text-center">Shopping Cart</p>
        </MDBCol>
        <MDBCol
          className="p-0 m-0 d-flex flex-column justify-content-center align-items-center"
          size="4"
        >
          <button
            className=""
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            <DeleteIcon />
            Clear cart
          </button>
        </MDBCol>
      </MDBRow>
      {infoCart.length > 0 ? (
        infoCart.map((element, index) => {
          return (
            <MDBRow fluid className="p-0 pt-2 m-0 shadow-4-strong">
              <MDBCol
                className="d-flex flex-column justify-content-center"
                size="4"
              >
                <img
                  src={element.image}
                  alt={element.title}
                  className="img-fluid"
                />
              </MDBCol>
              <MDBCol
                className="d-flex flex-column justify-content-center"
                size="4"
              >
                <p className="">{element.title}</p>
                <p className="">Category: {element.category}</p>
                <p className="">Gender: {element.gender}</p>
                <p className="">Color: {element.color}</p>
                <p className="">Size: {element.size}</p>
                <p className="">Unit price: ${element.price2}</p>
              </MDBCol>
              <MDBCol
                className="d-flex flex-column justify-content-center align-items-center"
                size="4"
              >
                <p aria-label="Select quantity">
                  <RemoveIcon onClick={() => handleDeleteItem(element)} />
                  <span>{element.quantity}</span>
                  <AddIcon onClick={() => handleAddItem(element)} />
                </p>
                {/* <p className="">Add to favorites</p> */}
                <button
                  onClick={() => {
                    deleteItemShopList(index);
                  }}
                >
                  Remove
                </button>
                <p className="mt-3">Total price ${element.price}</p>
              </MDBCol>
            </MDBRow>
          );
        })
      ) : (
        <div classNameName="">
          <img src={emptyCart} />
        </div>
      )}
      <MDBRow light bgColor="light">
        <MDBCol>
          <p className="text-center">Summary</p>
        </MDBCol>
      </MDBRow>
      <MDBRow light bgColor="light">
        <MDBCol>
          <p className="text-center">Items: {cart.quantity}</p>
          <p className="text-center">Subtotal: ${cart.total}</p>
          <p className="text-center">Total: ${cart.total}</p>
        </MDBCol>
        <MDBCol className="d-flex flex-column justify-content-center align-items-center">
          {infoCart.length >= 1 && (
            <button className="" onClick={checkoutHandler}>
              Checkout (${cart.total})
            </button>
          )}
        </MDBCol>
      </MDBRow>
      {/*  </MDBRow> */}
      <div>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            <AlertTitle>Added to cart successfully!</AlertTitle>
            Remember to log in to complete your purchase!
          </Alert>
        </Snackbar>
        <Snackbar open={warning} autoHideDuration={2000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="warning"
            sx={{ width: "100%" }}
          >
            <AlertTitle>Max Items</AlertTitle>
            Max items available!
          </Alert>
        </Snackbar>
      </div>
    </MDBContainer>
  );
};
