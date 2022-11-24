import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../Redux/Reducer/productDetails";
import { useParams } from "react-router";
import Loading from "../Features/Loading";

export default function Details() {
  const details = useSelector((state) => state.details);
  const loading = useSelector((state) => state.loadin);
  const error = useSelector((state) => state.details.error);
  const dispatch = useDispatch();
  const id = useParams();

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch]);

  // Lo que tiene que mostrar // Color, talla, stock, price, title
  if (loading) return <Loading />;
  if (!loading) return <h1>{error}</h1>;
  return (
    <div>
      Details
      <p>{details.color}</p>
      <p>{details.size}</p>
      <p>{details.stock}</p>
      <p>{details.price}</p>
      <p>{details.title}</p>
    </div>
  );
}
