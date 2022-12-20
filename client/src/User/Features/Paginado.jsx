import React from "react";
export default function Paginado({
  productsPerPage,
  productPaginado,
  paginado,
  currentPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(productPaginado / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul class="pagination">
        <li>
          <button
            class="page-link"
            onClick={() => {
              currentPage > 1
                ? paginado(currentPage - 1)
                : paginado(currentPage);
            }}
          >
            {"<"}
          </button>
        </li>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li class="page-item" key={number}>
              <button class="page-link" onClick={() => paginado(number)}>
                {number}
              </button>
            </li>
          ))}
        <li class="page-item">
          <button
            class="page-link"
            onClick={() => {
              currentPage < pageNumbers.length
                ? paginado(currentPage + 1)
                : paginado(currentPage);
            }}
          >
            {">"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
