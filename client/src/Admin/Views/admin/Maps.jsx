import React from "react";
// import CardLineChart from "../../Features/Cards/CardLineChart";
// import CardStats from "../../Features/Cards/CardStats";
import ReviewsAdmin from "../../Features/Cards/ReviewsAdmin";

// components

import MapExample from "../../Features/Maps/MapExample";

export default function Maps() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <ReviewsAdmin />
          </div>
        </div>
      </div>
    </>
  );
}
