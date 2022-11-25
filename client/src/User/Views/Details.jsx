import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../Redux/Reducer/productDetails";
import { useParams } from "react-router";
import Loading from "../Features/Loading";
import { Link } from "react-router-dom";
import NavBar from "../Features/NavBar";
import Footer from "../Features/Footer";

export default function Details() {
  const details = useSelector((state) => state.details);
  const loading = useSelector((state) => state.loadin);
  const error = useSelector((state) => state.details.error);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  // Falta stock

  if (loading) return <Loading />;
  if (!loading && error) return <h1>{error}</h1>;
  return (
    <div className=" min-h-screen">
      <div className="grid grid-cols-5 ">
        <div className="col-span-5 ">
          <NavBar />
        </div>
        <div className="col-span-2 w-[32rem] ml-5 mt-20 mb-20  shadow-2xl shadow-fuchsia-600 hover:shadow-2xl hover:shadow-green-700">
          <img
            className="h-[32rem] m-auto"
            src={details.details.image}
            alt={`pic-for${details.details.title}`}
          />
        </div>
        <div className="col-span-3 border border-slate-900 bg-gray-800 rounded-lg text-white shadow-2xl shadow-fuchsia-600 hover:shadow-2xl hover:shadow-green-700 m-auto w-[65rem]">
          {/*no se si quedan mejor los detalles con esto en el div de arriba
         de este comentario  => bg-slate-300 p-10 */}
          <div className="flex gap-32 mt-10 underline decoration-violet-800 hover:underline hover:decoration-green-700">
            <div className="font-noto-serif text-3xl justify-center p-4">
              <h1 className="capitalize">PRODUCT: {details.details.title}</h1>
              <br />
              <p>PRICE: ${details.details.price}</p>
              <br />
              <p>SIZE: {details.details.size}</p>
              <br />
              <p>CATEGORY: {details.details.category}</p>
              <br />
            </div>

            <div className="font-noto-serif text-2xl m-auto">
              <p className="capitalize">COLOR: {details.details.color}</p>
              <br />
              <p className="capitalize">SEASON: {details.details.season}</p>
              <br />
              <p className="capitalize">GENDER: {details.details.gender}</p>
              <br />
              <p>STOCK: {details.details.stock}</p>
              <br />
            </div>
          </div>
          <div>
            {details.details.stock >= 1 && <button>Añadir al carrito</button>}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}
