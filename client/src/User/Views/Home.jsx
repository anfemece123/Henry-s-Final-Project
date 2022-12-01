import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import NavBar from "../Features/NavBar";
import Loading from "../Features/Loading";
import Footer from "../Features/Footer";
import { ErrorSearch } from "../Features/ErrorSearch";
import { Filtros } from "../Features/Filtros";
import { getAllProducts } from "../../Redux/Reducer/allProductSlice";
import PaginatedItems from "../Features/ReactPaginate";

export default function Home() {
  const product = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-4 min-w-screen min-h-screen">
      <div className="col-span-4">
        <NavBar />
      </div>
      <div className="col-span-4 text-center text-slate-700 font-cursive-titles text-5xl mt-5">
        <h1>Products</h1>
      </div>
      <Filtros />
      <div className="col-span-4">
        {product.loading && <Loading />}
        {product.error && <ErrorSearch />}

        <PaginatedItems itemsPerPage={6} />
      </div>
      <div className="col-span-4">
        <Footer />
      </div>
    </div>
  );
}
