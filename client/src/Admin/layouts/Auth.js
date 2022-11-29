import React from "react";
import { Routes, Route, redirect } from "react-router-dom";

// components

import Navbar from "../Features/Navbars/AuthNavbar";
import FooterSmall from "../Features/Footers/FooterSmall";

// views

import Login from "../Views/auth/Login";
import Register from "../Views/auth/Register";

export default function Auth() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("../assets/img/register_bg_2.png") + ")",
            }}
          ></div>
          <Routes path="/auth">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            {/* <Redirect from="/auth" to="/auth/login" /> */}
          </Routes>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
