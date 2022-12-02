import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export default function checkoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

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
          amount: 100000,
        }
      );
      console.log(data);
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
  };

  return (
    <div className="container grid grid-cols-3 border border-red-900">
      <div className="col-span-3 items-center">
        <form onSubmit={handleSubmit}>
          <CardElement />
          <button>Comprar</button>
        </form>
      </div>
    </div>
  );
}
