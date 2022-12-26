import { inputAdornmentClasses } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MDBIcon,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import swal from "sweetalert";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// import { getAllProducts } from "../../../Redux/Reducer/allProductSlice";

import { getAllOrders } from "../../../Redux/Reducer/OrderSlice";

// components

export default function OrdersAdmin({ color }) {
  const user = useSelector((state) => state.users.allUsers);
  const userMap = user.map((e) => e.Orders.length);
  console.log(
    "orders",
    userMap.map((e) => e)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  return (
    <div>
      <div>
        {user.map((user) => {
          return (
            <div>
              {user.Orders.length > 0 ? (
                <div>
                  <p>
                    {user.first_name} {user.last_name}
                  </p>
                  <p>{user.address}</p>
                  <p>{user.phoneNumber}</p>
                  <p>{user.email}</p>
                </div>
              ) : null}

              {user.Orders.map((order) => {
                return (
                  <div className="mt-4">
                    {/* Projects table */}
                    <MDBTable responsive>
                      <MDBTableHead>
                        <tr className="table-primary">
                          <th scope="col">Order id : {order.id}</th>
                          <th scope="col">Gender</th>
                          <th scope="col">Size</th>
                          <th scope="col">Price/U</th>
                          <th scope="col">Quatity</th>
                          <th scope="col">Price/total</th>
                        </tr>
                      </MDBTableHead>

                      <MDBTableBody>
                        {order.products.map((element) => (
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  src={element.image}
                                  alt=""
                                  style={{ width: "45px", height: "45px" }}
                                  className="rounded-circle"
                                />
                                <div className="ms-3">
                                  <p className="fw-bold mb-1">
                                    {element.title}
                                  </p>
                                  <p className="text-muted mb-0">
                                    {element.category}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="fw-normal mb-1">{element.gender}</p>
                            </td>
                            <td>
                              <p className="fw-normal mb-1">{element.size}</p>
                            </td>
                            <td>
                              <p className="fw-normal mb-1">
                                ${element.price2}
                              </p>
                            </td>
                            <td>
                              <p className="fw-normal mb-1">
                                x {element.quantity}
                              </p>
                            </td>
                            <td>
                              <p className="fw-normal mb-1">${element.price}</p>
                            </td>
                          </tr>
                        ))}
                      </MDBTableBody>
                      <tr className="table-secondary">
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>TOTAL ORDER:</th>
                        <th>${order.total}</th>
                      </tr>
                    </MDBTable>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
OrdersAdmin.defaultProps = {
  color: "light",
};
