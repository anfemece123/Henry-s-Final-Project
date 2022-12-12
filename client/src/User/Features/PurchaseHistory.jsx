import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../Features/Footer";
import NavBar from "../Features/NavBar";

export default function PurcharseHistory() {
  const userID = useSelector((state) => state.auth.auth.id);
  const userOrder = useSelector((state) => state.users.userId.id);
  const users = useSelector((state) => state.users);
  const index = parseInt(userID - 1);
  const reviewID = useSelector((state) => state.users.userId);

  useEffect(() => {
    console.log(`ID del usuario en auth => ${userID}`);
    console.log(`ID del usuario en users.usersID => ${userOrder}`);
    console.log(`INdex para buscar => ${index}`);
  });

  return (
    <>
      <NavBar />
      {users.allUsers.length ? (
        users.allUsers[index].Orders.map((element) => {
          return (
            <div className="container">
              <h1>Numero de Orden: {element.id}</h1>
              <p>Compra realziada: {element.createdAt}</p>
              <div>
                <p>Productos que compro: {element.products_quantity}</p>
              </div>
              {element.products.map((element) => {
                return (
                  <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                    <div className="pb-4 md:pb-8 w-full md:w-40">
                      <img
                        className="w-full hidden md:block"
                        src={element.image}
                        alt="dress"
                        style={{ width: "200px" }}
                      />
                      <img
                        className="w-full md:hidden"
                        src={element.image}
                        alt="dress"
                        style={{ width: "200px" }}
                      />
                    </div>
                    <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                      <div className="w-full flex flex-col justify-start items-start space-y-8">
                        <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                          {element.title}
                        </h3>
                        <div className="flex justify-start items-start flex-col space-y-2">
                          <p className="text-sm leading-none text-gray-800">
                            <span className="text-gray-300">Genre:</span>
                            {element.gender}
                          </p>
                          <p className="text-sm leading-none text-gray-800">
                            <span className="text-gray-300">Size:</span>
                            {element.size}
                          </p>
                          <p className="text-sm leading-none text-gray-800">
                            <span className="text-gray-300">Color:</span>
                            {element.color}
                          </p>
                          <p className="text-sm leading-none text-gray-800">
                            <span className="text-gray-300">Unitario:</span>
                            {element.price}
                          </p>
                          <p className="text-sm leading-none text-gray-800">
                            <span className="text-gray-300">
                              Items comprado:
                            </span>
                            {element.stock}
                          </p>
                          <p className="text-sm leading-none text-gray-800">
                            <span className="text-gray-300">
                              Califica esta prenda!
                            </span>
                            <Link to={`/createReview/${element.id}`}>
                              Crear review
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div>
                <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                  Valor total: ${element.total}
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <h1>Aun no has comprado nada</h1>
      )}
      <Footer />
    </>
  );
}
