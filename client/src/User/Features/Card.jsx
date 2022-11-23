import React from "react";

export default function Card({ id, title, color, price, size, gender, stock }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{color}</p>
      <p>{price}</p>
      <p>{gender}</p>
      <p>{size}</p>
      <p>{stock}</p>
    </div>
  );
}
