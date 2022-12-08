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
// import RatingSystem from "./Rating/RatingSystem";
import RatingSystem from "./Rating/RatingSystem";

export default function Details() {
  const details = useSelector((state) => state.details);
  const loading = useSelector((state) => state.loadin);
  const error = useSelector((state) => state.details.error);
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = details.details;
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

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
    setOpen(false);
  };

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      quantity < details.details.stock && setQuantity(quantity + 1);
    }
  };

  if (loading) return <Loading />;
  if (!loading && error) return <h1>{error}</h1>;
  return (
    <div className=" min-h-screen bg-gray-200">
      <div className="grid grid-cols-5 ">
        <div className="col-span-5 ">
          <NavBar />
          <Link to="/home">
            <div
              className="flex items-center text-gray-500 hover:text-gray-600 dark:text-black cursor-pointer"
              // onclick="checkoutHandler(false)"
            >
              <ArrowBackIcon />
              <p className="text-sm pl-2 leading-none dark:hover:text-gray-200">
                Continue Shopping
              </p>
            </div>
          </Link>
        </div>
        <div className="col-span-2 w-[32rem] ml-5 mt-20 mb-20 shadow-2xl shadow-gray-600 hover:shadow-2xl hover:shadow-green-700">
          <img
            className="h-[32rem] m-auto"
            src={details.details.image}
            alt={`pic-for${details.details.title}`}
          />
        </div>
        <div className="col-span-3 border border-slate-900 bg-gray-800 rounded-lg text-white shadow-2xl  shadow-gray-600  hover:shadow-2xl hover:shadow-green-700 m-auto w-[65rem]">
          {/*no se si quedan mejor los detalles con esto en el div de arriba
         de este comentario  => bg-slate-300 p-10 */}
          <div className="flex gap-32 mt-10">
            <div className="font-noto-serif text-3xl justify-center p-4">
              <h1 className="capitalize">PRODUCT: {details.details.title}</h1>
              <br />
              <p>PRICE: ${details.details.price}</p>
              <br />
              <p>SIZE: {details.details.size}</p>
              <br />
              <p>CATEGORY: {details.details.category}</p>
              <br />
            </div>
            <div className="font-noto-serif text-2xl m-auto">
              <p className="capitalize">COLOR: {details.details.color}</p>
              <br />
              <p className="capitalize">SEASON: {details.details.season}</p>
              <br />
              <p className="capitalize">GENDER: {details.details.gender}</p>
              <br />
              <p>STOCK: {details.details.stock - quantity}</p>
              <br />
            </div>
            <div className="font-noto-serif text-2xl m-auto">
              <RemoveIcon onClick={() => handleQuantity("dec")} />
              <p>{quantity}</p>
              <AddIcon onClick={() => handleQuantity("inc")} />
            </div>
          </div>
          <div className="text-center">
            {details.details.stock >= 1 && (
              <button
                className="animate-pulse border border-slate-200 p-2 mb-3 rounded-lg hover:bg-green-400 hover:border-slate-800 hover:text-black"
                onClick={handleClick}
              >
                add to cart (${details.details.price * quantity} )
              </button>
            )}
          </div>

          <div>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                <AlertTitle>Added to cart successfully!</AlertTitle>
                Remember to log in to complete your bough!
              </Alert>
            </Snackbar>
          </div>

          <div>
            <RatingSystem />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}
