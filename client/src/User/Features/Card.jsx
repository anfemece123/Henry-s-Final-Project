import React from "react";
import { Link } from "react-router-dom";

export default function Card({
  id,
  title,
  color,
  price,
  size,
  gender,
  stock,
  category,
  thumbnail,
  images,
}) {
  return (
    <div>
      <Link to={`/detail/${id}`}>
        <h1>{title}</h1>
      </Link>
      <p>{color}</p>
      <p>{price}</p>
      <p>{gender}</p>
      <p>{size}</p>
      <p>{stock}</p>
      <p>{category}</p>

      <img src={images} style={{ width: "200px", height: "200px" }} />
      <img src={thumbnail} sstyle={{ width: "70px", height: "70px" }} />
    </div>
  );
}
