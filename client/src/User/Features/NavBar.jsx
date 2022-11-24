import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="w-full">
      <nav className="w-full h-fit mt-2  items-center flex gap-4">
        <button className=" h-10 no-underline box-border bg-slate-900 text-slate-50 rounded flex p-2 justify-center items-center transition hover:bg-slate-50 hover:text-slate-900 hover:border-2 hover:border-slate-900">
          <Link to="/home">Inicio</Link>
        </button>
        <button className=" h-10 no-underline box-border bg-slate-900 text-slate-50 rounded flex p-2 justify-center items-center transition hover:bg-slate-50 hover:text-slate-900 hover:border-2 hover:border-slate-900">
          <Link to="/">Landing</Link>
        </button>
        <button className=" h-10 no-underline box-border bg-slate-900 text-slate-50 rounded flex p-2 justify-center items-center transition hover:bg-slate-50 hover:text-slate-900 hover:border-2 hover:border-slate-900">
          <Link to="/formCreate">Formulario</Link>
        </button>
        <SearchBar />
        <button className=" h-10 no-underline box-border bg-slate-900 text-slate-50 rounded flex p-2 justify-center items-center transition hover:bg-slate-50 hover:text-slate-900 hover:border-2 hover:border-slate-900">
          <Link to="/formCreate">Form Create</Link>
        </button>
      </nav>
      ;
    </div>
  );
}
