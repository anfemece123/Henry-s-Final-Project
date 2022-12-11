import { inputAdornmentClasses } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { getAllOrders } from "../../../Redux/Reducer/OrderSlice";

// components

export default function OrdersAdmin({ color }) {
  const orders = useSelector((state) => state.orders.allOrders);
  console.log(
    "orders",
    orders.map((e) => e.products)
  );
  // const user = useSelector((state) => state.users.allUsers);
  // const userMap= user.map
  // const userMap = user.map((e) => e.Orders).flat();
  // console.log(
  //   "first name",
  //   user.map((e) => e.Orders).map((e) => e.map((e) => e.id))
  // );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  return (
    <div>
      <h3 className="pt-40 pb-10 text-2xl font-semibold font-bold tracking-wide">
        Orders
      </h3>
      {orders
        ? orders.map((element) => {
            return (
              <div
                className={
                  "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
                  (color === "light"
                    ? "bg-white"
                    : "bg-lightBlue-900 text-white")
                }
              >
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                      <h3
                        className={
                          "font-semibold text-lg " +
                          (color === "light"
                            ? "text-blueGray-700"
                            : "text-white")
                        }
                      >
                        Id order: {element.id}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="block w-full overflow-x-auto">
                  {/* Projects table */}
                  <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                      <tr>
                        <th
                          className={
                            "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                            (color === "light"
                              ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                              : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                          }
                        ></th>
                        <th
                          className={
                            "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                            (color === "light"
                              ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                              : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                          }
                        >
                          Gender
                        </th>
                        <th
                          className={
                            "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                            (color === "light"
                              ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                              : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                          }
                        >
                          Size
                        </th>
                        <th
                          className={
                            "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                            (color === "light"
                              ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                              : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                          }
                        >
                          Price/U
                        </th>
                        <th
                          className={
                            "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                            (color === "light"
                              ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                              : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                          }
                        >
                          Quantity
                        </th>
                        <th
                          className={
                            "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                            (color === "light"
                              ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                              : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                          }
                        >
                          Price/Total
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {element.products.map((e) => (
                        <tr>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                            <img
                              src={e.image}
                              className="h-12 w-12 bg-white rounded-full border"
                              alt="..."
                            ></img>{" "}
                            <span
                              className={
                                "ml-3 font-bold " +
                                +(color === "light"
                                  ? "text-blueGray-600"
                                  : "text-white")
                              }
                            >
                              {e.category}
                            </span>
                          </th>

                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {/* <i className="fas fa-circle text-orange-500 mr-2" />{" "} */}
                            {e.gender}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <div className="flex">{e.size}</div>
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            ${e.price2}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <div className="flex">{e.quantity}</div>
                          </td>
                          <td className=" text-green-500 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            ${e.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tr>
                      <th
                        className={
                          "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                        }
                      ></th>
                      <th
                        className={
                          "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                        }
                      ></th>
                      <th
                        className={
                          "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                        }
                      ></th>
                      <th
                        className={
                          "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                        }
                      >
                        {/* Size */}
                      </th>
                      <th
                        className={
                          " text-rose-600 px-6 align-middle border border-solid py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left "
                        }
                      >
                        TOTAL:
                      </th>
                      <th
                        className={
                          " text-rose-600 px-6 align-middle border border-solid py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left "
                        }
                      >
                        ${element.total}
                      </th>
                    </tr>
                  </table>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}
OrdersAdmin.defaultProps = {
  color: "light",
};
