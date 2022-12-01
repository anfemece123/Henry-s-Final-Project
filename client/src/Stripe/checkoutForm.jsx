import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

export default function checkoutForm() {
  const stripe = useStripe();
  const elements = useElements();

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
          amount: 1000,
        }
      );
      console.log(data);
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
