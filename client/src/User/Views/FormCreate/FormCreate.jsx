import React, { useState } from "react";
import { Formik } from "formik";
import validate from "./validate";

import { useDispatch } from "react-redux";
import { formCreate } from "../../../Redux/actions";
import { Link } from "react-router-dom";

export const FormCreate = () => {
  const [formularioEnviado, setformularioEnviado] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12">
      <div class="relative py-3 sm:max-w-xl mx-auto text-center">
        <button className=" h-10 no-underline box-border bg-slate-900 text-slate-50 rounded flex p-2 justify-center items-center transition hover:bg-slate-50 hover:text-slate-900 hover:border-2 hover:border-slate-900">
          <Link to="/home">Inicio</Link>
        </button>
        <span class="text-2xl font-light">Form Create</span>
        <div class="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
          <div class="h-2 bg-indigo-400 rounded-t-md"></div>
          <div class="py-10 px-20">
            <Formik
              initialValues={{
                id: "",
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
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="">
                    <label class="block font-semibold"> id</label>
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
                    )}
                  </div>

                  <div className="">
                    <label class="block font-semibold"> title</label>
                    <input
                      className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                      type="text"
                      id="title"
                      name="title"
                      placeholder="title"
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
                  <div>
                    <label class="block font-semibold"> Category</label>
                    <input
                      className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                      type="text"
                      id="category"
                      name="category"
                      placeholder="Category"
                      value={values.category}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.category && errors.category && (
                      <div className="text-red-700 underline decoration-pink-500">
                        {errors.category}
                      </div>
                    )}
                  </div>

                  <div>
                    <label class="block font-semibold"> Season</label>
                    <select
                      className="border w-full h-5 px-3 py-5 mt-2 "
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

                  <div>
                    <label class="block font-semibold"> color</label>
                    <input
                      className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                      type="text"
                      id="color"
                      name="color"
                      placeholder="color"
                      value={values.color}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.color && errors.color && (
                      <div className="text-red-700 underline decoration-pink-500">
                        {errors.color}
                      </div>
                    )}
                  </div>

                  <div>
                    <label class="block font-semibold"> price</label>
                    <input
                      className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                      type="text"
                      id="price"
                      name="price"
                      placeholder="price"
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
                    <label class="block font-semibold"> size</label>

                    <select
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
                  <div>
                    <label class="block font-semibold"> stock</label>
                    <input
                      className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                      type="text"
                      id="stock"
                      name="stock"
                      placeholder="stock"
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

                  <div>
                    <label class="block font-semibold"> gender</label>
                    <select
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

                  <div>
                    <label class="block font-semibold"> image</label>
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
                    class="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-lg"
                  >
                    Accept
                  </button>

                  {formularioEnviado && (
                    <p className="text-green-500">Prenda creada con exito!!</p>
                  )}
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
