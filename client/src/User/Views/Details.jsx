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
  const productId = details.details.id; //lo tengo que mandar a la review para hacer la request de createReview

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
    } else {
      quantity < details.details.stock && setQuantity(quantity + 1);
      setWarning(true);
    }
  };

  if (loading) return <Loading />;
  if (!loading && error) return <h1>{error}</h1>;
  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="col-span-4">
          <NavBar />
        </div>
        <Link to="/home">
          <div
            className="flex items-center text-gray-500 hover:text-gray-600 dark:text-black cursor-pointer"
            // onclick="checkoutHandler(false)"
          >
            <ArrowBackIcon />
            <p className="text-sm leading-none dark:hover:text-gray-200">
              Continue Shopping
            </p>
          </div>
        </Link>
        <div className="flex flex-col justify-center gap-4 mx-auto">
          <div className="flex flex-row gap-4">
            <div className="w-[32rem] border border-slate-900 rounded-lg shadow-2xl shadow-gray-600 hover:shadow-2xl">
              <img
                className="h-[32rem] m-auto"
                src={details.details.image}
                alt={`pic-for${details.details.title}`}
              />
            </div>
            <div className="border border-slate-900 rounded-lg shadow-2xl shadow-gray-600 hover:shadow-2xl  p-10 w-[65rem]">
              {/*no se si quedan mejor los detalles con esto en el div de arriba
         de este comentario  => bg-slate-300 p-10 */}
              <div className="flex gap-32">
                <div className="font-noto-serif text-3xl justify-center">
                  <h1 className="capitalize">
                    PRODUCT: {details.details.title}
                  </h1>
                  <br />
                  <p>PRICE: ${details.details.price}</p>
                  <br />
                  <p>SIZE: {details.details.size}</p>
                  <br />
                  <p>CATEGORY: {details.details.category}</p>
                  <br />
                </div>
                <div className="font-noto-serif text-3xl m-auto">
                  <p className="capitalize">COLOR: {details.details.color}</p>
                  <br />
                  <p className="capitalize">SEASON: {details.details.season}</p>
                  <br />
                  <p className="capitalize">GENDER: {details.details.gender}</p>
                  <br />
                  <p>STOCK: {details.details.stock}</p>
                  <br />
                </div>
              </div>
              <div className="text-center mt-5">
                <div className="block font-noto-serif text-2xl m-auto">
                  <span onClick={() => handleQuantity("dec")}>-</span>
                  <span> {quantity} </span>
                  <span onClick={() => handleQuantity("inc")}>+</span>
                </div>
                <br />
                {details.details.stock >= 1 && (
                  <button
                    className="animate-pulse border border-slate-600 p-2 rounded-lg hover:bg-black hover:border-slate-800 hover:text-white "
                    onClick={handleClick}
                  >
                    add to cart (${details.details.price * quantity} )
                  </button>
                )}
              </div>
              <div>
                <Snackbar
                  open={open}
                  autoHideDuration={2000}
                  onClose={handleClose}
                >
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
                    <AlertTitle>
                      There is no more stock of this product!!
                    </AlertTitle>
                    Come back soon!
                  </Alert>
                </Snackbar>
              </div>
            </div>
          </div>
          <div className="overflow-auto h-[7rem]">
            <ReviewSystem />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
