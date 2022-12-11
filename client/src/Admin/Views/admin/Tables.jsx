import React from "react";

// components

// import CardTable from "../../Features/Cards/CardTable";
import ProductsAdmin from "../../Features/Cards/ProductsAdmin";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <ProductsAdmin />
        </div>
        {/* <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div> */}
      </div>
    </>
  );
}
