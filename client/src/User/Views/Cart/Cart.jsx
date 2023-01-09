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
import Footer from "../../Features/Footer";
import emptyCart from "../../../Images/empty_cart.png";
import swal from "sweetalert";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NavBar from "../../Features/NavBar";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { AlertTitle } from "@mui/material";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

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
      <MDBRow start className="p-0 m-0 mt-3" id="cart">
        <MDBCol className="p-0 m-0 d-flex flex-column justify-content-center align-items-center">
          <Link
            className="d-flex flex-column justify-content-center align-items-center"
            to="/home"
          >
            <span className="mb-0 text-center d-flex flex-column justify-content-center align-items-center">
              Continue Shopping
            </span>
            <ArrowBackIcon />
          </Link>
        </MDBCol>
        <MDBCol className="p-0 m-0 d-flex flex-column justify-content-center align-items-center">
          <MDBIcon
            color="danger"
            type="button"
            rounded
            size="sm"
            fas
            icon="trash-alt"
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            Clear cart
          </MDBIcon>
        </MDBCol>
      </MDBRow>

      {infoCart.length > 0 ? (
        infoCart.map((element, index) => {
          return (
            <MDBRow
              key={index}
              fluid
              center
              className="p-0 pt-4 m-0 shadow-4-strong"
            >
              <MDBRow classNameName="">
                <MDBCol className="">
                  <h2 className="pb-2 text-center">{element.title}</h2>
                </MDBCol>
              </MDBRow>
              <MDBCol
                className="d-flex flex-column justify-content-center"
                size="4"
                xl="3"
              >
                <img
                  src={element.image}
                  alt={element.title}
                  style={{ maxHeight: "325px", maxWidth: "325px" }}
                />
              </MDBCol>
              <MDBCol
                style={{ paddingLeft: "7%", paddingRight: 0 }}
                className="d-flex flex-column justify-content-center"
                size="4"
                xl="3"
              >
                <p className="">Category: {element.category}</p>
                <p className="">Gender: {element.gender}</p>
                <p className="">Color: {element.color}</p>
                <p className="">Size: {element.size}</p>
                <p className="">Unit price: ${element.price2}</p>
              </MDBCol>
              <MDBCol
                className="d-flex flex-column justify-content-center align-items-center"
                size="4"
                xl="3"
              >
                <p aria-label="Select quantity">
                  <RemoveIcon onClick={() => handleDeleteItem(element)} />
                  <span>{element.quantity}</span>
                  <AddIcon onClick={() => handleAddItem(element)} />
                </p>
                {/* <p className="">Add to favorites</p> */}
                <MDBIcon
                  color="danger"
                  type="button"
                  rounded
                  size="sm"
                  fasc
                  icon="trash-alt"
                  onClick={() => {
                    deleteItemShopList(index);
                  }}
                />
                <p className="mt-3 text-center">
                  Total price: ${element.price}
                </p>
              </MDBCol>
            </MDBRow>
          );
        })
      ) : (
        <MDBRow classNameName="">
          <img src={emptyCart} />
        </MDBRow>
      )}
      <MDBRow light bgColor="light">
        <MDBCol>
          <h3 className="mt-3 text-center">Summary</h3>
        </MDBCol>
      </MDBRow>
      <MDBRow center light bgColor="light">
        <MDBCol xl="3">
          <p className="text-center">
            <MDBIcon icon="check-circle" className="me-2 text-success" />
            ITEMS: {cart.quantity}
          </p>

          <p className="text-center">
            <MDBIcon icon="check-circle" className="me-2 text-success" />
            SUBTOTAL: ${cart.total}
          </p>

          <p className="text-center">
            <MDBIcon icon="check-circle" className="me-2 text-success" />
            TOTAL: ${cart.total}
          </p>
        </MDBCol>
        <MDBCol
          xl="3"
          className="d-flex flex-column justify-content-center align-items-center"
        >
          {infoCart.length >= 1 && (
            <MDBBtn
              className="mb-3"
              style={{ maxHeight: "100px", maxWidth: "180px" }}
              onClick={checkoutHandler}
            >
              Checkout (${cart.total})
            </MDBBtn>
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
      <MDBRow className="">
        <MDBCol>
          <Footer />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
