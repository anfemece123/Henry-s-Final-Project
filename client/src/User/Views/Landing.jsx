import React from "react";
import NavBar from "../Features/NavBar";
import girLanding from "../../Images/bg2.png";
import { Link } from "react-router-dom";
import Footer from "../Features/Footer";

import { height } from "@mui/system";

export default function Landing() {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="grid grid-cols-5">
        <div className="col-span-5">
          <NavBar />
        </div>
        <div className="col-span-3">
          <img
            src={girLanding}
            className="m-auto"
            style={{
              height: "49rem",
            }}
          />
        </div>

        <div className="col-span-2 m-auto">
          <div className="text-start text-5xl font-cursive-titles">
            <h1>
              The style,
              <br />
              is your personality
            </h1>
          </div>
          <div className="text-center mt-11">
            <button className="font-noto-serif text-2xl rounded-full bg-black text-white border border-slate-900 p-4">
              <Link to="/home">WATCH CATALOG</Link>
            </button>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 col-span-5 border border-slate-900">
          <Footer />
        </div>
      </div>
    </div>
  );
}
