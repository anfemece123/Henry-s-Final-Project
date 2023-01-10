import React, { useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllusers, getByIdUser } from "../Redux/Reducer/Users";
import { clearCart } from "../Redux/Reducer/cartSlice";
import NavBar from "../User/Features/NavBar";
import Footer from "../User/Features/Footer";
import CheckoutStructure from "./CheckoutStructure";

import { Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBSpinner } from "mdb-react-ui-kit";

export default function checkoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const token = useSelector((state) => state.auth.auth.token);
  const auth = useSelector((state) => state.auth.auth);
  const user = useSelector((state) => state.users.userId);
  const [loading, setLoading] = React.useState(false);

  const totalCart = useSelector((state) => state.cart.total);
  const url = "https://henry-s-final-project-backend-production.up.railway.app";
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      const { id } = paymentMethod;
      const { data } = await axios.post(
        `http://localhost:3001/checkout/checkout`,
        {
          id,
          amount: totalCart * 100,
        }
      );
      //creando la orden en el back-end
      const products = cart.products;
      const products_quantity = cart.quantity;
      const total = cart.total;
      const status = cart.status;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios
        .post(
          `http://localhost:3001/order/newOrder`,
          {
            products,
            products_quantity,
            total,
            status,
          },
          config
        )
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error.message));

      swal({
        title: "Payment successful",
        text: "Thanks your for your Purchase!",
        icon: "success",
        button: "Ok",
      });
      setLoading(false);
      navigate("/home");
    } else {
      setLoading(false);
      return swal({
        title: "Payment denied!",
        text: "Please, check your credit card information!",
        icon: "warning",
        button: "Let me see",
      });
    }

    const idUser = auth.id;
    dispatch(clearCart(idUser));
  };

  useEffect(() => {
    dispatch(getAllusers());
    dispatch(getByIdUser(user.id));
  }, [dispatch]);

  return (
    <MDBContainer fluid className="p-0 m-0">
       <MDBRow className="p-0 m-0">
        <MDBCol className="p-0 m-0">
          <NavBar />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol className="p-0 m-0 mb-3 d-flex flex-column justify-content-center align-items-center"
            start>
          <Link className="d-flex flex-column justify-content-center align-items-center" to="/cart">
              <span className="mt-3 text-center d-flex flex-column justify-content-center align-items-center">
                Back to Cart
              </span>
              <ArrowBackIcon />
          </Link>
        </MDBCol>
      </MDBRow>
      <MDBRow style={{maxWidth:"992px"}} className="m-auto mb-5 p-3 border border-red-900">
        <MDBCol className="mt-3 mb-3">
          <Stack spacing={2}>
              <CheckoutStructure
                first_name={user.first_name}
                address={user.address}
                phoneNumber={user.phoneNumber}
                profileImage={user.profileImage}
                last_name={user.last_name}
                email={user.email}
              />
              {loading ? (
                <form onSubmit={handleSubmit} className="text-center">
                  <CardElement />
                  <MDBBtn disabled>
                    <MDBSpinner
                      size="sm"
                      role="status"
                      tag="span"
                      className="me-2"
                    />
                    Loading...
                  </MDBBtn>
                </form>
              ) : (
                <form onSubmit={handleSubmit} className="text-center">
                  <CardElement />
                  <MDBBtn type="submit" className="mt-3 mb-3">TO PAY</MDBBtn>
                </form>
              )}
            </Stack>
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
