import React from "react";
import { Link } from "react-router-dom";

export default function Card({
  id,
  title,
  price,
  size,
  gender,
  stock,
  images,
}) {
  return (
    <div>
      <img src={images} style={{ width: "200px", height: "150px" }} />
      <div>
        <div>
          <Link to={`/detail/${id}`}>
            <h1>{title}</h1>
          </Link>
        </div>
      </div>
      <div>
        <div>
          <div>
            <span>Price:$</span>
            <span> {price}</span>
          </div>
          <div>
            <span>Size:</span>
            <span> {size}</span>
          </div>
        </div>
        <div>
          <div>
            {stock ? (
              <div>
                <span>Stock:</span>
                <span> {stock}</span>
              </div>
            ) : (
              <div>
                <span>Stock:</span>
                <span>No disponible</span>
              </div>
            )}
          </div>
          <div>
            {gender ? (
              <div>
                <span>Gender:</span>
                <span> {gender}</span>
              </div>
            ) : (
              <div>
                <span>Gender:</span>
                <span> All</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
