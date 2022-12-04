import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import Card from "../Features/Card";
import Pagination from "@mui/material/Pagination";

export default function PaginatedItems({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);
  const product = useSelector((state) => state.allProducts.allProducts);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = product.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(product.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % product.length;

    setItemOffset(newOffset);
    setPage(event.selected);
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
      <div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={6}
          pageCount={pageCount}
          previousLabel="< previous"
          pageLinkClassName=""
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
        />
      </div>
    </div>
  );
}
