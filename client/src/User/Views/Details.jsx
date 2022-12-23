import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../Redux/Reducer/productDetails";
import { useParams } from "react-router";
import Loading from "../Features/Loading";
import NavBar from "../Features/NavBar";
import Footer from "../Features/Footer";
import { addProduct } from "../../Redux/Reducer/cartSlice";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { AlertTitle } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RatingSystem from "./Rating/RatingSystem";
import ReviewSystem from "./Rating/ReviewSystem";
import { getAllReviews } from "../../Redux/Reducer/RatingSlice";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

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
  const productId = details.details.id;

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
    <MDBContainer fluid className="min-vh-100">
      <MDBRow>
        <MDBCol size={12}>
          <NavBar />
        </MDBCol>
        <MDBCol size={12}>
          <Link className="text-decoration-none text-black" to="/home">
            <ArrowBackIcon />
            <p>Continue Shopping</p>
          </Link>
        </MDBCol>
        <MDBCol size={6} className="mt-5 mb-5">
          <img
            src={details.details.image}
            alt={`pic-for${details.details.title}`}
            style={{ width: "620px" }}
            className="img-fluid"
          />
        </MDBCol>
        <MDBCol size={6} className="mt-5 mb-5">
          <h1 className="pb-2">PRODUCT: {details.details.title}</h1>

          <p>PRICE: ${details.details.price}</p>

          <p>SIZE: {details.details.size}</p>

          <p>CATEGORY: {details.details.category}</p>

          <p>COLOR: {details.details.color}</p>

          <p>SEASON: {details.details.season}</p>

          <p>GENDER: {details.details.gender}</p>

          <p>STOCK: {details.details.stock}</p>

          <span className="fs-2" onClick={() => handleQuantity("dec")}>
            -
          </span>
          <span className="fs-4"> {quantity} </span>
          <span className="fs-2" onClick={() => handleQuantity("inc")}>
            +
          </span>

          {details.details.stock >= 1 && (
            <button className="ms-5" onClick={handleClick}>
              add to cart (${details.details.price * quantity} )
            </button>
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
        <MDBCol
          size={12}
          id="reviewSystem"
          className="shadow-lg mb-5 mt-5 w-50 m-auto"
        >
          <ReviewSystem />
        </MDBCol>
        <MDBCol size={12} className="bottom">
          <Footer />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
