import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  deleteProId,
  getAllProducts,
  getById,
} from "../../../Redux/Reducer/allProductSlice";

// components

import TableDropdown from "../Dropdowns/TableDropdown";
import { Link, useNavigate } from "react-router-dom";

export default function ProductsAdmin({ color }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.allProducts.allProducts);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  function alertButtonDelete(e) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteProId(e));
        swal("Poof! Your product has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your product is safe!");
      }
    });
  }
  function editBotoAlert(e) {
    swal({
      title: "Are you sure?",
      text: "You are about to modify this product.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        navigate("/formEditProduct");
      } else {
        swal("Your product is safe!");
      }
    });
  }

  return (
    <div>
      <h3 className="pt-40 pb-10 text-2xl font-bold tracking-wide">Products</h3>
      {products
        ? products.map((element) => {
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
                        {element.title}
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
                          Price
                        </th>
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
                          Stock
                        </th>
                        <th
                          className={
                            "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                            (color === "light"
                              ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                              : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                          }
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                          <img
                            src={element.image}
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
                            {element.category}
                          </span>
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          ${element.price}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {/* <i className="fas fa-circle text-orange-500 mr-2" />{" "} */}
                          {element.gender}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex">{element.size}</div>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2">{element.stock}</span>
                            <div className="relative w-full">
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                <div
                                  style={{ width: `${element.stock * 10}%` }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                          {/* {(productId = element.id)} */}
                          <button
                            value={element.id}
                            type="submit"
                            onClick={() => {
                              {
                                alertButtonDelete(element.id);
                              }
                            }}
                          >
                            <DeleteIcon />
                          </button>

                          <button
                            onClick={() => {
                              {
                                editBotoAlert(element.id);
                              }
                            }}
                          >
                            <EditIcon
                              onClick={() => dispatch(getById(element.id))}
                            />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}

ProductsAdmin.defaultProps = {
  color: "light",
};

ProductsAdmin.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
