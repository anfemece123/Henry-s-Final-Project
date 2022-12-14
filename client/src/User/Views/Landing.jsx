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
      <div className="grid grid-cols-5">
        <div className="col-span-5">
          <NavBar />
        </div>
        <div className="pl-20 justify-items-center ">
          <img src={logo} className="pt-2 mt-40 pl-20" />
          <div className=" justify-items-center ">
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

        <div className="absolute inset-x-0 bottom-0 col-span-5 border border-slate-900">
          <Footer />
        </div>
      </div>
    </div>
  );
}
