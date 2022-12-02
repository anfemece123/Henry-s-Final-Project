import React, { useState } from "react";
import { Formik } from "formik";
import validate from "./validate";
import swal from "sweetalert";

import { useDispatch } from "react-redux";
import { formCreate } from "../../../Redux/actions";
import { Link } from "react-router-dom";
import NavBar from "../../Features/NavBar";

export const FormCreate = () => {
  const [formularioEnviado, setformularioEnviado] = useState(false);
  const dispatch = useDispatch();

  const alert = (e) => {
    if (!formularioEnviado) {
      return swal({
        title: "Good Job!",
        text: "Product created!",
        icon: "success",
      });
    } else {
      return swal({
        title: "Something went wrong :'(",
        text: "Try again later!",
        icon: "warning",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 antialiased  flex flex-col justify-center ">
      <NavBar />
      <div class="relative py-3 sm:max-w-xl mx-auto text-center">
        {/* <button className=" h-10 no-underline box-border bg-slate-900 text-slate-50 rounded flex p-2 justify-center items-center transition hover:bg-slate-50 hover:text-slate-900 hover:border-2 hover:border-slate-900">
          <Link to="/home">Inicio</Link>
        </button> */}
        <span class="text-2xl font-light">Form Create</span>
        <div class="w-50 max-w-lg">
          <Formik
            initialValues={{
              /* id: "", */
              title: "",
              category: "",
              //   isOnSale: "",
              color: "",
              season: "",
              price: "",
              size: "",
              gender: "",
              stock: "",
              image: "",
            }}
            onSubmit={(values, { resetForm }) => {
              dispatch(formCreate(values));
              console.log(values);

              resetForm();

              setformularioEnviado(true);
              setTimeout(() => setformularioEnviado(false), 5000);
            }}
            validate={(values) => validate(values)}
          >
            {({
              handleSubmit,
              errors,
              values,
              handleChange,
              handleBlur,
              touched,
              setFieldValue,
            }) => (
              <form onSubmit={handleSubmit}>
                {console.log(values)}
                <div className="w-full px-3">
                  {/* <label class="block font-semibold">id</label>
                  <input
                    className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                    type="id"
                    id="id"
                    name="id"
                    placeholder="id"
                    value={values.id}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.id && errors.id && (
                    <div className="text-red-700 underline decoration-pink-500">
                      {errors.id}
                    </div>
                  )} */}
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block font-semibold" for="grid-first-name">
                      Title
                    </label>
                    <input
                      className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Title"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.title && errors.title && (
                      <div className="text-red-700 underline decoration-pink-500">
                        {errors.title}
                      </div>
                    )}
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block font-semibold"> Category</label>

                    <select
                      className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      type="text"
                      id="category"
                      name="category"
                      value={values.category}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="">Category</option>
                      <option value="shirts">Shirt</option>
                      <option value="t-shirts">T-shirt</option>
                      <option value="foot">Shoes</option>
                      <option value="jeans">jeans</option>
                      <option value="jacket">Jackets</option>
                    </select>
                    {touched.category && errors.size && (
                      <div className="text-red-700 underline decoration-pink-500">
                        {errors.category}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block font-semibold"> Price</label>
                    <input
                      className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                      type="text"
                      id="price"
                      name="price"
                      placeholder="$"
                      value={values.price}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.price && errors.price && (
                      <div className="text-red-700 underline decoration-pink-500">
                        {errors.price}
                      </div>
                    )}
                  </div>
                  <div>
                    <label class="block font-semibold"> Stock</label>
                    <input
                      className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                      type="text"
                      id="stock"
                      name="stock"
                      placeholder="#"
                      value={values.stock}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.stock && errors.stock && (
                      <div className="text-red-700 underline decoration-pink-500">
                        {errors.stock}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label class="font-semibold"> color</label>

                  <div
                    class="grid w-[30rem] grid-cols-3 space-x-2 rounded-xl bg-gray-200 p-2"
                    x-data="app"
                  >
                    <div>
                      <input
                        class="peer hidden"
                        type="radio"
                        id="1"
                        name="option"
                        value="blue"
                        checked={values.color === "blue"}
                        onChange={() => setFieldValue("color", "blue")}
                        onBlur={handleBlur}
                      />

                      <label
                        for="1"
                        class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                      >
                        blue
                      </label>
                    </div>

                    <div>
                      <input
                        class="peer hidden"
                        type="radio"
                        id="2"
                        name="option"
                        value="white"
                        checked={values.color === "white"}
                        onChange={() => setFieldValue("color", "white")}
                        onBlur={handleBlur}
                      />
                      <label
                        for="2"
                        class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-white peer-checked:font-bold peer-checked:text-black"
                      >
                        white
                      </label>
                    </div>
                    <div>
                      <input
                        class="peer hidden"
                        type="radio"
                        id="3"
                        name="option"
                        value="black"
                        checked={values.color === "black"}
                        onChange={() => setFieldValue("color", "black")}
                        onBlur={handleBlur}
                      />
                      <label
                        for="3"
                        class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-black peer-checked:font-bold peer-checked:text-white"
                      >
                        black
                      </label>
                    </div>
                    <div>
                      <input
                        class="peer hidden"
                        type="radio"
                        id="4"
                        name="option"
                        value="red"
                        checked={values.color === "red"}
                        onChange={() => setFieldValue("color", "red")}
                        onBlur={handleBlur}
                      />
                      <label
                        for="4"
                        class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-red-600 peer-checked:font-bold peer-checked:text-white"
                      >
                        red
                      </label>
                    </div>
                    <div>
                      <input
                        class="peer hidden"
                        type="radio"
                        id="5"
                        name="option"
                        value="yellow"
                        checked={values.color === "yellow"}
                        onChange={() => setFieldValue("color", "yellow")}
                        onBlur={handleBlur}
                      />
                      <label
                        for="5"
                        class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-yellow-400 peer-checked:font-bold peer-checked:text-white"
                      >
                        yellow
                      </label>
                    </div>
                    <div>
                      <input
                        class="peer hidden"
                        type="radio"
                        id="6"
                        name="option"
                        value="green"
                        checked={values.color === "green"}
                        onChange={() => setFieldValue("color", "green")}
                        onBlur={handleBlur}
                      />
                      <label
                        for="6"
                        class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-green-500 peer-checked:font-bold peer-checked:text-white"
                      >
                        green
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block font-semibold"> Size</label>

                    <select
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      type="text"
                      id="size"
                      name="size"
                      placeholder="size"
                      value={values.size}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option> ------ </option>
                      <option>XS</option>
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    {touched.size && errors.size && (
                      <div className="text-red-700 underline decoration-pink-500">
                        {errors.size}
                      </div>
                    )}
                  </div>

                  <div className="w-full md:w-1/2 px-3">
                    <label class="block font-semibold"> Gender</label>
                    <select
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      type="text "
                      id="gender"
                      name="gender"
                      placeholder="gender"
                      value={values.gender}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option> ------ </option>
                      <option>female</option>
                      <option>male</option>
                    </select>
                    {touched.gender && errors.gender && (
                      <div className="text-red-700 underline decoration-pink-500">
                        {errors.gender}
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <label class="block font-semibold"> Image</label>
                  <input
                    className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                    type="url"
                    id="image"
                    name="image"
                    placeholder="image"
                    value={values.image}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.image && errors.image && (
                    <div className="text-red-700 underline decoration-pink-500">
                      {errors.image}
                    </div>
                  )}
                </div>
                <div>
                  <label class="block font-semibold"> Season</label>
                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                    type="text"
                    id="season"
                    name="season"
                    placeholder="season"
                    value={values.season}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option> ------ </option>
                    <option>autumn</option>
                    <option>spring</option>
                    <option>summer</option>
                    <option>winter</option>
                  </select>
                  {touched.season && errors.season && (
                    <div className="text-red-700 underline decoration-pink-500">
                      {errors.season}
                    </div>
                  )}
                </div>
                {/* <div>
              <label> isOnSale</label>
              <input
                type="text"
                id="isOnSale"
                name="isOnSale"
                placeholder="isOnSale"
                value={values.isOnSale}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.isOnSale && errors.isOnSale && (
                <div>{errors.isOnSale}</div>
              )} */}
                {/* </div> */}
                <button
                  type="submit"
                  class="mt-4 bg-black text-white py-2 px-6 rounded-lg"
                  onClick={alert}
                >
                  Accept
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
