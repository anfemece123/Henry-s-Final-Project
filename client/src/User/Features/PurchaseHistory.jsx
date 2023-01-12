import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../Features/Footer";
import NavBar from "../Features/NavBar";

import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function PurcharseHistory() {
  const userID = useSelector((state) => state.auth.auth.id);
  const userOrder = useSelector((state) => state.users.userId.id);
  const users = useSelector((state) => state.users);
  const index = parseInt(userID - 1);
  const reviewID = useSelector((state) => state.users.userId);
  return (
    <MDBContainer fluid className="p-0 m-0" id="chec-div">
      <MDBRow className="p-0 m-0">
        <MDBCol className="p-0 m-0">
          <NavBar />
        </MDBCol>
      </MDBRow>
      {users.allUsers.length ? (
        users.allUsers[index].Orders.map((element) => {
          return (
            <MDBRow
              key={element.id}
              center
              className="p-0 pt-4 m-0 shadow-4-strong"
            >
              <MDBRow className="p-0 m-0">
                <MDBCol className="p-0 ps-3 m-0">
                  <h2>Order Number: {element.id}</h2>
                  <p>Purchase Date: {element.createdAt}</p>
                  <p>Products Quantity: {element.products_quantity}</p>
                  <p className="">Total: ${element.total}</p>
                </MDBCol>
              </MDBRow>

              {element.products.map((element, index) => {
                return (
                  <MDBRow
                    key={element.id}
                    center
                    className="p-0 pt-4 pb-4 m-0 shadow-4-strong"
                  >
                    <MDBRow className="p-0 m-0">
                      <MDBCol className="p-0 m-0">
                        <h2 className="pb-2 text-center">{element.title}</h2>
                      </MDBCol>
                    </MDBRow>
                    <MDBCol
                      className="d-flex flex-column justify-content-center"
                      size="4"
                      xl="3"
                    >
                      <img
                        className=""
                        src={element.image}
                        alt={element.title}
                        style={{ maxHeight: "325px", maxWidth: "325px" }}
                      />
                    </MDBCol>
                    <MDBCol
                      style={{ paddingLeft: "7%", paddingRight: 0 }}
                      className="d-flex flex-column justify-content-center"
                      size="4"
                      xl="3"
                    >
                      <p className="">Category: {element.category}</p>
                      <p className="">Gender: {element.gender}</p>
                      <p className="">Color: {element.color}</p>
                      <p className="">Size: {element.size}</p>
                      <p className="">Unit Price: ${element.price2}</p>
                      <p className="">Purchased Items: {element.quantity}</p>
                    </MDBCol>

                    <MDBCol
                      className="d-flex flex-column justify-content-center align-items-center"
                      size="4"
                      xl="3"
                    >
                        <Link to={`/createReview/${element.id}`}>
                          Make A Review
                        </Link> 
                    </MDBCol>
                  </MDBRow>
                );
              })}
            </MDBRow>
          );
        })
      ) : (
        <MDBRow className="p-0 m-0">
          <MDBCol className="p-0 m-0">
            <h1>No Purchases</h1>
          </MDBCol>
        </MDBRow>
      )}
      <MDBRow className="">
        <MDBCol>
          <Footer />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
