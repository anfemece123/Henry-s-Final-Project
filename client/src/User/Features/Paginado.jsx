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
      <ul className="pagination">
        <li>
          <button
            className="page-link"
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
            <li className="page-item" key={number}>
              <button className="page-link" onClick={() => paginado(number)}>
                {number}
              </button>
            </li>
          ))}
        <li className="page-item">
          <button
            className="page-link"
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
