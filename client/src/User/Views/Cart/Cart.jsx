import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addQuantity,
  clearCart,
  removeProduct,
  removeQuantity,
} from "../../../Redux/Reducer/cartSlice";
import Footer from "../../Features/Footer";
import swal from "sweetalert";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import emptyCart from "../../../Images/empty_cart.png";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "react-bootstrap/Button";
import Navigation from "../../Features/Navigation";
export const Cart = () => {
  const dispatch = useDispatch();
  const infoCart = useSelector((state) => state.cart.products);

  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);

  const priceDetail = useSelector((state) => state.details.details.price);

  console.log("auth", auth);

  const deleteItemShopList = (e) => {
    dispatch(
      removeProduct({
        remove: e,
        price: infoCart.map((e) => e.price),
        quantity: cart.quantity,
      })
    );
  };
  return (
    <section className="pb-5 min-vh-100">
      <Navigation />
      <div className="container ">
        <div className="row w-100">
          <div className="col-lg-12 col-md-12 col-12">
            <h3 className="display-5 mb-2 text-center">Shopping Cart</h3>
            <p className="mb-5 text-center">
              <i className="text-info font-weight-bold">{cart.quantity}</i>{" "}
              items in your cart
            </p>
            <table
              id="shoppingCart"
              className="table table-condensed table-responsive"
            >
              <thead>
                <tr>
                  <th style={{ width: "60%" }}>Product</th>
                  <th style={{ width: "12%" }}>Price</th>
                  <th style={{ width: "10%" }}>Quantity</th>
                  <th style={{ width: "16%" }}></th>
                </tr>
              </thead>
              <tbody>
                {infoCart.length > 0 ? (
                  infoCart.map((element, index) => {
                    console.log("en componente", element.quantity);
                    const addItem = () => {
                      element.quantity > 0 &&
                        dispatch(
                          addQuantity({
                            price: element.price,
                            quantity: element.quantity,
                            id: element.id,
                            priceDetail: priceDetail,
                          })
                        );
                    };
                    const deletItem = () => {
                      element.quantity > 1 &&
                        dispatch(
                          removeQuantity({
                            price: element.price,
                            quantity: element.quantity,
                            id: element.id,
                            priceDetail: priceDetail,
                          })
                        );
                    };
                    return (
                      <tr>
                        <td data-th="Product">
                          <div className="row">
                            <div className="col-md-3 text-left">
                              <img
                                src={element.image}
                                alt=""
                                className="img-fluid d-none d-md-block rounded mb-2 shadow "
                              />
                            </div>
                            <div className="col-md-9 text-left mt-sm-2">
                              <h4>{element.title}</h4>
                              <p className="font-weight-light">
                                {element.category}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td data-th="Price">${element.price}</td>
                        <td data-th="Quantity">
                          <input
                            type="number"
                            className="form-control form-control-lg text-center"
                            value={element.quantity}
                          />
                        </td>
                        <td className="actions" data-th="">
                          <div className="text-right">
                            <button className="btn btn-white border-secondary bg-white btn-md mb-2">
                              <AddIcon onClick={() => addItem()} />
                            </button>
                            <button className="btn btn-white border-secondary bg-white btn-md mb-2">
                              <RemoveIcon onClick={() => deletItem()} />
                            </button>
                            <button
                              className="btn btn-white border-secondary bg-white btn-md mb-2"
                              onClick={() => {
                                deleteItemShopList(index);
                              }}
                            >
                              <DeleteIcon />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <div className="pl-20">
                    <img src={emptyCart} />
                  </div>
                )}
              </tbody>
            </table>
            <div className="float-right text-right">
              <h4>Subtotal:</h4>
              <h1>${cart.total}</h1>
            </div>
          </div>
        </div>
        <div className="row mt-4 d-flex align-items-center">
          <div className="col-sm-6 order-md-2 text-right">
            {infoCart.length >= 1 && (
              <Button
                href="/pasarelaTest"
                className="btn btn-primary mb-4 btn-lg pl-5 pr-5 me-5"
              >
                Checkout
              </Button>
            )}
            <Button
              className="btn btn-primary mb-4 btn-lg pl-5 pr-5"
              onClick={() => {
                dispatch(clearCart());
              }}
            >
              Clear Cart
            </Button>
          </div>
          <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
            <Link to="/home">
              <i className="fas fa-arrow-left mr-2"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
