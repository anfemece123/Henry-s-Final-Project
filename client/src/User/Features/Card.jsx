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
    <div className="border border-slate-900 rounded overflow-hidden shadow-lg">
      <img
        className="m-auto"
        src={images}
        style={{ width: "300px", height: "300px" }}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-center mb-2">
          <Link to={`/detail/${id}`}>
            <h1>{title}</h1>
          </Link>
        </div>
      </div>
      <div className="flex text-center">
        <div>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            $ {price}
          </span>
        </div>
        <div>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Stock: {stock}
          </span>
        </div>
        <div>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Category: {category}
          </span>
        </div>
      </div>
    </div>
  );
}
