import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import NavBar from "../Features/NavBar";
import Loading from "../Features/Loading";
import Footer from "../Features/Footer";
import { ErrorSearch } from "../Features/ErrorSearch";
import { Filtros } from "../Features/Filtros";
import { getAllProducts } from "../../Redux/Reducer/allProductSlice";
import Card from "../Features/Card";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Home() {
  const product = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(1);

  // Ese 27 reemplazar por el id que me llega del back(productos totales)
  const pageCount = Math.ceil(27 / 6 - 1);

  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    dispatch(getAllProducts(page));
  }, [dispatch, page]);

  return (
    <div className="grid grid-cols-4 min-w-screen min-h-screen">
      <div className="col-span-4">
        <NavBar />
      </div>
      <div className="col-span-4 text-center text-slate-700 font-cursive-titles text-5xl mt-5">
        <h1>Products</h1>
      </div>
      <Filtros page={page} />
      <div className="col-span-4">
        {product.loading && <Loading />}
        {product.error && <ErrorSearch />}

        {product
          ? product.allProducts.map((element) => {
              return (
                <Card
                  key={element.id}
                  id={element.id}
                  title={element.title}
                  price={element.price}
                  size={element.size}
                  gender={element.gender}
                  stock={element.stock}
                  images={element.image}
                />
              );
            })
          : null}
        <Stack spacing={2}>
          <Typography>Page: {page}</Typography>
          <Pagination
            color="secondary"
            count={pageCount}
            page={page}
            onChange={handleChange}
          />
        </Stack>
      </div>
      <div className="col-span-4">
        <Footer />
      </div>
    </div>
  );
}
