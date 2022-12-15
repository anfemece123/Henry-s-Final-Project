import React from "react";
import NavBar from "../Features/NavBar";
import girLanding from "../../Images/bg2.png";
import { Link } from "react-router-dom";
import Footer from "../Features/Footer";

import logo from "../../Images/logo.png";

import { height } from "@mui/system";

export default function Landing() {
  return (
    <div className="bg-[url('https://res.cloudinary.com/dyfjoi0td/image/upload/v1671049872/ecommerce/pexels-ylanite-koppens-934064_6_rc0trb.jpg')] h-full w-full  from-sky-500 to-indigo-500">
      <div className="">
        <NavBar />
        <div className="flex flex-col justify-start w-fit">
          <img src={logo} className="mt-52" />
          <div className="">
            <div className=" h-50 w-100 pl-30 text-start text-5xl font-cursive-titles">
              <h1>The style, is your personality</h1>
            </div>
            <div className="text-center mt-11">
              <button className="font-noto-serif text-2xl rounded-full bg-black text-white border border-slate-900 p-4">
                <Link to="/home">WATCH CATALOG</Link>
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
