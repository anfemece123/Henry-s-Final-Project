import React from "react";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GitHubIcon from "@mui/icons-material/GitHub";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import logo from "../../Images/image.png";

export default function Footer() {
  return (
    <footer className=" inset-x-0 bottom-0 p-5 bg-gray-900 sm:p-6 dark:bg-gray-900">
      <div className="md:flex md:justify-between">
        <div className="mb-1 md:mb-0">
          {/* <a href="asdas" className="flex items-center"> */}
          <img src={logo} className="mr-3 h-20" alt="Icono nuestro" />
          {/* <span className="self-center text-2xl font-cursive-titles font-semibold whitespace-nowrap text-white">
              Tienda Nuestra
            </span>
          </a> */}
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-2 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              shortcuts
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-2">
                <Link to="/formRegister" className="hover:underline">
                  <HowToRegIcon className="m-2" /> Register
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/login" className="hover:underline">
                  <LockOpenIcon className="m-2" /> Log In
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/cart" className="hover:underline">
                  <ShoppingCartIcon className="m-2" /> Cart
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              PROJECT and TEAM
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a
                  href="https://github.com/anfemece123/Henry-s-Final-Project"
                  className="hover:underline "
                >
                  <GitHubIcon className="m-2" /> GitHub project
                </a>
              </li>
              <li>
                <Link to="/aboutUs" className="hover:underline">
                  <PersonSearchIcon className="m-2" /> Developers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Find Us
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-2">
                <GpsFixedIcon className="m-2" /> Nebraska - 208 S Broad St
              </li>
              <li className="mb-2">
                <EmailIcon className="m-2" /> TiendaNuestra@atencion.com
              </li>
              <li className="mb-2">
                <LocalPhoneIcon className="m-2" />
                (252) 482-2676
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
