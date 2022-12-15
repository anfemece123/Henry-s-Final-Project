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
    <nav className="flex flex-row justify-center">
      <ul className="flex flex-row gap-4">
        <li>
          <button
            className="rounded-lg py-5 px-3 hover:bg-blue-100 hover:text-slate-900 focus:none text-black-900 font-bold text-xl"
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
            <li className=" " key={number}>
              <button
                className="rounded-lg py-5 px-3 hover:bg-blue-100 hover:text-slate-900 text-black-900 font-bold text-xl"
                onClick={() => paginado(number)}
              >
                {number}
              </button>
            </li>
          ))}
        <li>
          <button
            className="rounded-lg py-5 px-3 hover:bg-blue-100 hover:text-slate-900 focus:none text-black-900 font-bold text-xl"
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
