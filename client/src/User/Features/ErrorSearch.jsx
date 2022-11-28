import React from "react";
import { Filtros } from "./Filtros";
import NavBar from "./NavBar";

export const ErrorSearch = () => {
  return (
    <div>
      <NavBar />
      <div className="col-span-5 mt-5 mb-2">
        <div className="text-center uppercase font-noto-serif text-3xl">
          <h1>Products</h1>
        </div>
      </div>
      <Filtros />
      <div className="pl-20">
        <img src="https://crazygiftgallery.com/uploads/no-product.png" />
      </div>
    </div>
  );
};
