import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../Redux/Reducer/productDetails";
import { useParams } from "react-router";
import Loading from "../Features/Loading";
import { Link } from "react-router-dom";
import NavBar from "../Features/NavBar";

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
    <div className="bg-slate-200 w-full h-auto">
      <NavBar/>
      <div className="flex p-24">

      <img
      className="ml-4 h-96 border-2 border-sky-200  "
        src={details.details.image}
        alt={`pic-for${details.details.title}`}
      />
        <div className="ml-16 ">
        {/*no se si quedan mejor los detalles con esto en el div de arriba
         de este comentario  => bg-slate-300 p-10 */}
      <h1 className="text-4xl m-2">Nombre: {details.details.title}</h1>
      <p className="text-2xl m-2">Price: ${details.details.price}</p>
      <p className="m-2">Size: {details.details.size}</p>
      
      
      <p className="m-2">Category: {details.details.category}</p>
      <p className="m-2">Color: {details.details.color}</p>
      <p className="m-2">Season: {details.details.season}</p>
      <p className="m-2">Gender: {details.details.gender}</p>
      <p className="m-2">Stock: {details.details.stock}</p>
      {details.details.stock >= 1 && <button className="m-4 h-10 no-underline box-border bg-sky-400 text-slate-50 rounded flex p-2 justify-center items-center transition hover:bg-slate-50 hover:text-slate-900 hover:border-2 hover:border-slate-900">
        Añadir al carrito</button>}
        </div>
      
      </div>
    </div>
  );
}
