import React from "react";

// components

// import CardLineChard from "../../Features/Cards/CardLineChart";
// import CardBarChart from "../../Features/Cards/CardBarChart";
// import CardPageVisits from "../../Features/Cards/UsersAdmin";
import UsersAdmin from "../../Features/Cards/UsersAdmin";
// import CardSocialTraffic from "../../Features/Cards/CardSocialTraffic.js";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        {/* <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChard />
        </div> */}
        {/* <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div> */}
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 xl:mb-0 px-4">
          <UsersAdmin />
        </div>
      </div>
    </>
  );
}
