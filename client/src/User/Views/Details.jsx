import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

import { useDispatch, useSelector } from "react-redux";

import Loading from "../Features/Loading";
import NavBar from "../Features/NavBar";
import Footer from "../Features/Footer";
import ReviewSystem from "./Rating/ReviewSystem";
import { addProduct } from "../../Redux/Reducer/cartSlice";
import { getProductDetails } from "../../Redux/Reducer/productDetails";
import { getAllReviews } from "../../Redux/Reducer/RatingSlice";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { AlertTitle } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";

export default function Details() {
  const details = useSelector((state) => state.details);
  const loading = useSelector((state) => state.loadin);
  const error = useSelector((state) => state.details.error);
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = details.details;
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = React.useState(false);
  const [warning, setWarning] = React.useState(false);


  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);
  useEffect(() => {
    dispatch(getAllReviews());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(
      addProduct({
        ...product,
        quantity,
        price: details.details.price * quantity,
        price2: details.details.price,
      })
    );
    // Hacer que no se muestre cuando la alerta de que ya esta el producto salga 🤔
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setWarning(false);
    setOpen(false);
  };

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else if (type === "inc") {
      quantity < details.details.stock && setQuantity(quantity + 1);
    } else {
      setWarning(true);
    }
    if (quantity === details.details.stock) setWarning(true);
  };

  if (loading) return <Loading />;
  if (!loading && error) return <h1>{error}</h1>;

  return (
    <MDBContainer fluid className="p-0 m-0">
      <MDBRow fluid className="p-0 m-0">
        <MDBCol className="p-0 m-0">
          <NavBar />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol
          className="p-0 m-0 mb-3 d-flex flex-column justify-content-center align-items-center"
          start
        >
          <Link
            className="d-flex flex-column justify-content-center align-items-center"
            to="/home"
          >
            <span className="mt-3 text-center d-flex flex-column justify-content-center align-items-center">
              Continue Shopping
            </span>
            <ArrowBackIcon />
          </Link>
        </MDBCol>
      </MDBRow>
      <MDBRow
        center
        className="p-4 m-auto shadow-4-strong"
        style={{ maxWidth: "1640px" }}
      >
        <MDBRow>
          <MDBCol>
            <h2 className="pb-2 text-center">{details.details.title}</h2>
          </MDBCol>
        </MDBRow>
        <MDBCol
          className="d-flex flex-column justify-content-center"
          size="4"
          xl="3"
        >
          <img
            src={details.details.image}
            alt={`pic-for${details.details.title}`}
            style={{ maxHeight: "325px", maxWidth: "325px" }}
          />
        </MDBCol>
        <MDBCol
          style={{ paddingLeft: "7%", paddingRight: 0 }}
          className="d-flex flex-column justify-content-center"
          size="4"
          xl="3"
        >
          <p>PRICE: ${details.details.price}</p>

          <p>SIZE: {details.details.size}</p>

          <p>CATEGORY: {details.details.category}</p>

          <p>COLOR: {details.details.color}</p>

          <p>SEASON: {details.details.season}</p>

          <p>GENDER: {details.details.gender}</p>

          <p>STOCK: {details.details.stock}</p>
        </MDBCol>
        <MDBCol
          className="d-flex flex-column justify-content-center align-items-center"
          size="4"
          xl="3"
        >
          <p aria-label="Select quantity">
            <RemoveIcon className="" onClick={() => handleQuantity("dec")}>
              -
            </RemoveIcon>
            <span className=""> {quantity} </span>
            <AddIcon className="" onClick={() => handleQuantity("inc")}>
              +
            </AddIcon>
          </p>

          {details.details.stock >= 1 && (
            <MDBBtn className="" onClick={handleClick}>
              add to cart (${details.details.price * quantity})
            </MDBBtn>
          )}
        </MDBCol>
        <MDBCol size={12}>
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
          <Snackbar
            open={warning}
            autoHideDuration={2000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="warning"
              sx={{ width: "100%" }}
            >
              <AlertTitle>Max Items</AlertTitle>
              Max items available!
            </Alert>
          </Snackbar>
        </MDBCol>
      </MDBRow>
      <MDBRow className="p-0 m-0">
        <MDBCol
          size={12}
          id="reviewSystem"
          className="shadow-lg mb-5 mt-5 w-50 m-auto p-0"
        >
          <ReviewSystem />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol size={12} className="bottom">
          <Footer />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
