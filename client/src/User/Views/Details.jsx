import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../Redux/Reducer/productDetails";
import { useParams } from "react-router";
import Loading from "../Features/Loading";
import { Link } from "react-router-dom";

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
    <div>
      <button>
        <Link to="/home">Volver al Home</Link>
      </button>
      <p>ID: ${details.details.id}</p>
      <p>Size: {details.details.size}</p>
      <p>Price: {details.details.price}</p>
      <p>Nombre: {details.details.title}</p>
      <p>Category: {details.details.category}</p>
      <p>Color: {details.details.color}</p>
      <p>Season: {details.details.season}</p>
      <p>Gender: {details.details.gender}</p>
      <img
        src={details.details.image}
        alt={`pic-for${details.details.title}`}
      />
    </div>
  );
}
