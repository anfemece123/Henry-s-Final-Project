import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Features/Card";
import NavBar from "../Features/NavBar";
import Loading from "../Features/Loading";
import Footer from "../Features/Footer";
import { ErrorSearch } from "../Features/ErrorSearch";
import { Filtros } from "../Features/Filtros";
import { getAllProducts } from "../../Redux/Reducer/allProductSlice";
import PaginatedItems from "../Features/Paginate";

export default function Home() {
  const product = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  if (product.loading) return <Loading />;
  if (product.error) return <ErrorSearch />;

  return (
    <div className="grid grid-cols-5 ">
    <div className="col-span-5">
      <NavBar />
    </div>
    <div className="col-span-5 mt-5 mb-2">
      <div className="text-center uppercase font-noto-serif text-3xl">
        <h1>Products</h1>
      </div>
    </div>
    <Filtros />

    <div className="col-span-5 flex flex-wrap gap-7 justify-center">
        <div className="">
        {/* las cards ahora se renderizan desde PaginatedItems :/ */}
        
        <PaginatedItems itemsPerPage={4}/>
        
      
        </div>
        <div className="mt-5 col-span-5">
        <Footer />
      </div>
      </div>
      
    </div>
  );
}
