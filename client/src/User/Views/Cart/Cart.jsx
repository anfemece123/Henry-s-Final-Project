import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addQuantity,
  clearCart,
  removeProduct,
  removeQuantity,
  setQuantity,
} from "../../../Redux/Reducer/cartSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import emptyCart from "../../../Images/empty_cart.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import swal from "sweetalert";
import DeleteIcon from "@mui/icons-material/Delete";
import NavBar from "../../Features/NavBar";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const dispatch = useDispatch();
  const infoCart = useSelector((state) => state.cart.products);
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth.auth);

  const priceDetail = useSelector((state) => state.details.details.price);

  const deleteItemShopList = (e) => {
    dispatch(
      removeProduct({
        remove: e,
        price: infoCart.map((e) => e.price),
        quantity: cart.quantity,
      })
    );
  };

  const checkoutHandler = () => {
    if (Object.keys(auth) < 1) {
      navigate("/login");
    } else {
      navigate("/pasarelaTest");
    }
  };

  return (
    <div
      class="w-full h-full bg-white dark:bg-gray-900 bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0"
      id="chec-div"
    >
      <NavBar />
      <div
        class="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
        id="checkout"
      >
        <div class="flex items-end lg:flex-row flex-col justify-end" id="cart">
          <div
            class="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white dark:bg-gray-800 overflow-y-hidden overflow-x-hidden lg:h-screen h-auto"
            id="scroll"
          >
            <Link to="/home">
              <div
                class="flex items-center text-gray-500 hover:text-gray-600 dark:text-black cursor-pointer"
                // onclick="checkoutHandler(false)"
              >
                <ArrowBackIcon />
                <p class="text-sm pl-2 leading-none dark:hover:text-gray-200">
                  Continue Shopping
                </p>
              </div>
            </Link>

            <p class="lg:text-4xl text-3xl font-black leading-10 text-gray-800 dark:text-black pt-3">
              Shopping Cart
            </p>
            <button
              className="text-xl leading-normal text-red-500 dark:text-red-500"
              onClick={() => {
                dispatch(clearCart());
              }}
            >
              <DeleteIcon />
              Clear cart
            </button>

            {infoCart.length > 0 ? (
              infoCart.map((element, index) => {
                const addItem = () => {
                  element.quantity < element.stock &&
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
                  <div class="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
                    <div class="md:w-4/12 2xl:w-1/4 w-full">
                      <img
                        src={element.image}
                        alt="Black Leather Bag"
                        class="h-full object-center object-cover md:block hidden"
                      />
                    </div>
                    <div class="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                      <p class="text-xs leading-3 text-gray-800 dark:text-black md:pt-0 pt-4">
                        Category: {element.category}
                      </p>
                      <div class="flex items-center justify-between w-full pt-1">
                        <p class="text-base font-black leading-none text-gray-800 dark:text-black">
                          {element.title}
                        </p>
                        <div
                          aria-label="Select quantity"
                          class="py-2 px-1 border border-gray-200 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                        >
                          <RemoveIcon onClick={() => deletItem()} />
                          <p>{element.quantity}</p>
                          <AddIcon onClick={() => addItem()} />
                        </div>
                      </div>
                      <p class="text-xs leading-3 text-gray-600 dark:text-black pt-2">
                        Gender: {element.gender}
                      </p>
                      <p class="text-xs leading-3 text-gray-600 dark:text-black py-4">
                        Color: {element.color}
                      </p>
                      <p class="w-96 text-xs leading-3 text-gray-600 dark:text-black">
                        Size: {element.size}
                      </p>
                      <div class="flex items-center justify-between pt-5">
                        <div class="flex itemms-center">
                          <p class="text-xs leading-3 underline text-gray-800 dark:text-black cursor-pointer">
                            Add to favorites
                          </p>
                          <button
                            onClick={() => {
                              deleteItemShopList(index);
                            }}
                          >
                            <p class="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                              Remove
                            </p>
                          </button>
                        </div>
                        <p class="text-base font-black leading-none text-gray-800 dark:text-black">
                          ${element.price}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="pl-20">
                <img src={emptyCart} />
              </div>
            )}
          </div>
          <div class="lg:w-96 md:w-8/12 w-full bg-gray-100 dark:bg-gray-900 h-full">
            <div class="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
              <div>
                <p class="lg:text-4xl text-3xl font-black leading-9 text-gray-800 dark:text-white">
                  Summary
                </p>
                <div class="flex items-center justify-between pt-16">
                  <p class="text-base leading-none text-gray-800 dark:text-white">
                    Items
                  </p>
                  <p class="text-base leading-none text-gray-800 dark:text-white">
                    {cart.quantity}
                  </p>
                </div>
                <div class="flex items-center justify-between pt-5">
                  <p class="text-base leading-none text-gray-800 dark:text-white">
                    Subtotal
                  </p>
                  <p class="text-base leading-none text-gray-800 dark:text-white">
                    ${cart.total}
                  </p>
                </div>
              </div>
              <div>
                <div class="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                  <p class="text-2xl leading-normal text-gray-800 dark:text-white">
                    Total
                  </p>
                  <p class="text-2xl font-bold leading-normal text-right text-gray-800 dark:text-white">
                    ${cart.total}
                  </p>
                </div>
                {infoCart.length >= 1 && (
                  <button
                    class="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700"
                    onClick={checkoutHandler}
                  >
                    Checkout (${cart.total})
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
