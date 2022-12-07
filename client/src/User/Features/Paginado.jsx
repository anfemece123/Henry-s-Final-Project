import React from "react";
export default function Paginado({ countriesPerPage, countries, paginado }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(countries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className={style.nav}>
      <ul>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li>
              <a onClick={() => paginado(number)}>{number}</a>
            </li>
          ))}
      </ul>
    </nav>
  );
}
