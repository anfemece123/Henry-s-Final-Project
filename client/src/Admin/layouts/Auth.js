import React from "react";
import { Routes, Route, redirect } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";

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
                "url(" +
                require("../assets/img/register_bg_2.png").default +
                ")",
            }}
          ></div>
          <Routes>
            <Route path="/auth/login" component={Login} />
            <Route path="/auth/register" component={Register} />
            {/* <Redirect from="/auth" to="/auth/login" /> */}
          </Routes>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
