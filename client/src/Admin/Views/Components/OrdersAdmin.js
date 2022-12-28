import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MDBIcon,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBTypography,
} from "mdb-react-ui-kit";
import { getAllOrders } from "../../../Redux/Reducer/OrderSlice";

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
                <div className="m-2">
                  <MDBTypography tag="strong" variant="h4">
                    Information user
                  </MDBTypography>
                  <hr />
                  <li className="text-muted">
                    <MDBIcon fas icon="user" color="primary" />{" "}
                    {user.first_name} {user.last_name}
                  </li>
                  <li className="text-muted">
                    <MDBIcon fas icon="location-arrow" color="primary" />{" "}
                    {user.address}
                  </li>
                  <li className="text-muted">
                    <MDBIcon fas icon="mobile-alt" color="primary" />{" "}
                    {user.phoneNumber}
                  </li>
                  <li className="text-muted">
                    <MDBIcon far icon="envelope" color="primary" /> {user.email}
                  </li>
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
