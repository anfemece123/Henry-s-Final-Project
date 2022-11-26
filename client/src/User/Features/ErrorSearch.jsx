import React from "react";
import { Filtros } from "./Filtros";
import NavBar from "./NavBar";

export const ErrorSearch = () => {
  return (
    <div>
      <NavBar />
      <div className="col-span-5 mt-5 mb-2">
        <div className="text-center uppercase font-noto-serif text-3xl">
          <h1>Products</h1>
        </div>
      </div>
      <Filtros />

      <img
        width="800px"
        src="https://cdn.dribbble.com/users/3512533/screenshots/14168376/media/1357b33cb4057ecb3c6f869fc977561d.jpg"
      />
    </div>
  );
};
