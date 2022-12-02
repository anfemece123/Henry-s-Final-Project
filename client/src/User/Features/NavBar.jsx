import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";

export default function NavBar() {
  const cart = useSelector((state) => state.cart.quantity);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <div className="w-full bg-gray-900">
      <nav className="w-full h-fit items-center flex gap-4">
        <Link to="/home">
          <HomeIcon
            sx={{ fontSize: 45 }}
            className=" h-10 no-underline box-border bg-slate-900 text-slate-50 rounded flex p-2 justify-center items-center transition hover:bg-slate-50 hover:text-slate-900 hover:border-2 hover:border-slate-900"
          ></HomeIcon>
        </Link>

        <SearchBar />
        <button className=" h-10 no-underline box-border bg-slate-900 text-slate-50 rounded flex p-2 justify-center items-center transition hover:bg-slate-50 hover:text-slate-900 hover:border-2 hover:border-slate-900">
          <Link to="/formCreate">Add New Product</Link>
        </button>
        <button className=" h-10 no-underline box-border bg-slate-900 text-slate-50 rounded flex p-2 justify-center items-center transition hover:bg-slate-50 hover:text-slate-900 hover:border-2 hover:border-slate-900">
          <Link to="/admin">Admin Panel Temporal</Link>
        </button>
        <button className=" h-10 no-underline box-border bg-slate-900 text-slate-50 rounded flex p-2 justify-center items-center transition hover:bg-slate-50 hover:text-slate-900 hover:border-2 hover:border-slate-900">
          <Link to="/formRegister">Register</Link>
        </button>
        <button className=" h-10 no-underline box-border bg-slate-900 text-slate-50 rounded flex p-2 justify-center items-center transition hover:bg-slate-50 hover:text-slate-900 hover:border-2 hover:border-slate-900">
          <Link to="/login">
            {" "}
            <LoginIcon /> Log In
          </Link>
        </button>
        <Link to="/cart">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={cart} color="secondary">
              <ShoppingCartIcon color="primary" />
            </StyledBadge>
          </IconButton>
        </Link>
      </nav>
    </div>
  );
}
