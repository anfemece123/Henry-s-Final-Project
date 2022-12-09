import React from "react";
import { Routes, Route } from "react-router-dom";

// components

import AdminNavbar from "../Features/Navbars/AdminNavbar";
import Sidebar from "../Features/Sidebar/Sidebar";
import HeaderStats from "../Features/Headers/HeaderStats";
import FooterAdmin from "../Features/Footers/FooterAdmin";

// views

import Dashboard from "../Views/admin/Dashboard";
import Maps from "../Views/admin/Maps.jsx";
import Settings from "../Views/admin/Settings.jsx";
import Tables from "../Views/admin/Tables";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Routes path="/admin">
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="maps" element={<Maps />} />
            <Route path="settings" element={<Settings />} />
            <Route path="tables" element={<Tables />} />
          </Routes>
          {/* <FooterAdmin /> */}
        </div>
      </div>
    </>
  );
}
