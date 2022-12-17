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
    <div className="w-[32rem] h-[21rem] hover:shadow-2xl hover:shadow-slate-700">
      <img
        src={images}
        className="m-auto pt-2"
        style={{ width: "250px", height: "175px" }}
      />
      <div>
        <div className="pt-5 font-noto-serif uppercase text-center text-3xl hover:animate-pulse hover:text-green-700">
          <Link to={`/detail/${id}`}>
            <h1>{title}</h1>
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-center pl-2 pt-8 pb-2 gap-20">
        <div className="flex-row text-lg font-noto-serif">
          <div>
            <span>Price:$</span>
            <span> {price}</span>
          </div>
          <div>
            <span>Size:</span>
            <span> {size}</span>
          </div>
        </div>
        <div className="flex flex-col text-lg font-noto-serif">
          <div>
            {stock ? (
              <div>
                <span>Stock:</span>
                <span className="text-green-500"> {stock}</span>
              </div>
            ) : (
              <div>
                <span>Stock:</span>
                <span className="text-red-400 animate-pulse">
                  {" "}
                  No disponible
                </span>
              </div>
            )}
          </div>
          <div>
            {gender ? (
              <div>
                <span>Gender:</span>
                <span className="capitalize"> {gender}</span>
              </div>
            ) : (
              <div>
                <span>Gender:</span>
                <span className="uppercase text-amber-400"> All</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
