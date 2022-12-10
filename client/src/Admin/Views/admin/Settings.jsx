import React from "react";

// components

import CardSettings from "../../Features/Cards/CardSettings";
import CardProfile from "../../Features/Cards/CardProfile.js";
import CardSocialTraffic from "../../Features/Cards/CardSocialTraffic";

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full  px-4">
          <CardSocialTraffic />
        </div>
        {/* <div className="w-full lg:w-8/12 px-4">
          <CardSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div> */}
      </div>
    </>
  );
}
