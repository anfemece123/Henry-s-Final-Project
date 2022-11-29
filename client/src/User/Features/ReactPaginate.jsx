import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import Card from "../Features/Card";
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
    <div>
      {product
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
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
