import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Redux/Reducer/cartSlice";
import NavBar from "../User/Features/NavBar";

export default function checkoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const token = useSelector((state) => state.auth.auth.token);

  const totalCart = useSelector((state) => state.cart.total);
  console.log("array de productos", cart.products);

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        title: "Payment succeful",
        text: "Thanks your for your bought!",
        icon: "success",
        button: "Ok",
      });
      navigate("/home");
    } else {
      return swal({
        title: "Payment denied!",
        text: "Please, check your credit card information!",
        icon: "warning",
        button: "Let me see",
      });
    }
    dispatch(clearCart());
  };

  return (
    <div>
      <NavBar />
      <div className="container grid grid-cols-3 border border-red-900">
        <div className="col-span-3 items-center">
          <form onSubmit={handleSubmit}>
            <CardElement />
            <p> ${totalCart}</p>
            <button>Comprar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
