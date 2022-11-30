import React from "react";
import { useSelector } from "react-redux";

export const Cart = () => {
  const infoCart = useSelector((state) => state.cart.products);

  console.log("info", infoCart);

  return <div>Cart</div>;
};
