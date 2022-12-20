import React, { useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import UsersAdmin from "../Components/UsersAdmin";
import ProductsAdmin from "../Components/ProductsAdmin";
import OrdersAdmin from "../Components/OrdersAdmin";
import ReviewsAdmin from "../Components/ReviewsAdmin";

export default function AdminContainer() {
  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <>
      <MDBTabs justify className="mb-3">
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab1")}
            active={justifyActive === "tab1"}
          >
            Users
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab2")}
            active={justifyActive === "tab2"}
          >
            Products
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab3")}
            active={justifyActive === "tab3"}
          >
            Orders
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab4")}
            active={justifyActive === "tab4"}
          >
            Reviews
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === "tab1"}>
          <UsersAdmin />
        </MDBTabsPane>
        <MDBTabsPane show={justifyActive === "tab2"}>
          <ProductsAdmin />
        </MDBTabsPane>
        <MDBTabsPane show={justifyActive === "tab3"}>
          <OrdersAdmin />
        </MDBTabsPane>
        <MDBTabsPane show={justifyActive === "tab4"}>
          <ReviewsAdmin />
        </MDBTabsPane>
      </MDBTabsContent>
    </>
  );
}
