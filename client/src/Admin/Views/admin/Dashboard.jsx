import React from "react";

// components

import UsersAdmin from "../../Features/Cards/UsersAdmin";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap"></div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 xl:mb-0 px-4">
          <UsersAdmin />
        </div>
      </div>
    </>
  );
}
