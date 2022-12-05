import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import Card from "../Features/Card";
import "./paginate.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function PaginatedItems({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);
  const product = useSelector((state) => state.allProducts.allProducts);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = product.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(product.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % product.length;

    setItemOffset(newOffset);
  };

  return (
    <div className="grid grid-cols-2">
      <div className="col-span-2 flex flex-wrap justify-center gap-8 mt-5">
        {currentItems
          ? currentItems.map((element) => {
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
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 20,
          boxSizing: "border-box",
          width: "100%",
          height: "100%",
        }}
      >
        <ReactPaginate
          onPageChange={handlePageClick}
          pageRangeDisplayed={6}
          pageCount={pageCount}
          activeClassName={"item active "}
          breakClassName={"item break-me "}
          breakLabel={"..."}
          containerClassName={"pagination"}
          disabledClassName={"disabled-page"}
          marginPagesDisplayed={2}
          nextClassName={"item next "}
          pageClassName={"item pagination-page "}
          previousClassName={"item previous"}
          nextLabel={<ArrowForwardIcon style={{ fontSize: 18, width: 150 }} />}
          previousLabel={<ArrowBackIcon style={{ fontSize: 18, width: 150 }} />}
        />
      </div>
    </div>
  );
}
