import React, { useState } from "react";
import { Formik } from "formik";
import validate from "./validate";

import { useDispatch } from "react-redux";
import { formCreate } from "../../../Redux/actions";
import { Link } from "react-router-dom";

export const ForrmRegister = () => {
  const [formularioEnviado, setformularioEnviado] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12">
      <div class="relative py-3 sm:max-w-xl mx-auto text-center">
        <button className=" h-10 no-underline box-border bg-slate-900 text-slate-50 rounded flex p-2 justify-center items-center transition hover:bg-slate-50 hover:text-slate-900 hover:border-2 hover:border-slate-900">
          <Link to="/home">Inicio</Link>
        </button>
        <span class="text-2xl font-light">Form Register</span>
        <div class="w-50 max-w-lg">
          <Formik
            initialValues={{
              first_name: "",
              last_name: "",
              email: "",
              password: "",
              confirmPassword: "",
              phoneNumber: "",
              address: "",
              profileImage: "",
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
                {console.log(values)}
                <div className="w-full px-3"></div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block font-semibold" for="grid-first-name">
                      First Name
                    </label>
                    <input
                      className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                      type="text"
                      id="first_name"
                      name="first_name"
                      placeholder="first_name"
                      value={values.first_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.first_name && errors.first_name && (
                      <div className="text-red-700 underline decoration-pink-500">
                        {errors.first_name}
                      </div>
                    )}
                  </div>

                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block font-semibold" for="grid-first-name">
                      Last Name
                    </label>
                    <input
                      className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                      type="text"
                      id="last_name"
                      name="last_name"
                      placeholder="last_name"
                      value={values.last_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.last_name && errors.last_name && (
                      <div className="text-red-700 underline decoration-pink-500">
                        {errors.last_name}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block font-semibold" for="grid-first-name">
                      Phone Number
                    </label>
                    <input
                      className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="phoneNumber"
                      value={values.phoneNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.phoneNumber && errors.phoneNumber && (
                      <div className="text-red-700 underline decoration-pink-500">
                        {errors.phoneNumber}
                      </div>
                    )}
                  </div>

                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block font-semibold" for="grid-first-name">
                      Address
                    </label>
                    <input
                      className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                      type="text"
                      id="address"
                      name="address"
                      placeholder="address"
                      value={values.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.address && errors.address && (
                      <div className="text-red-700 underline decoration-pink-500">
                        {errors.address}
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <label class="block font-semibold"> Email</label>
                  <input
                    className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email && (
                    <div className="text-red-700 underline decoration-pink-500">
                      {errors.email}
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block font-semibold" for="grid-first-name">
                      Password
                    </label>
                    <input
                      className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                      type="password"
                      id="password"
                      name="password"
                      placeholder="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.password && errors.password && (
                      <div className="text-red-700 underline decoration-pink-500">
                        {errors.password}
                      </div>
                    )}
                  </div>

                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block font-semibold" for="grid-first-name">
                      Confirm Password
                    </label>
                    <input
                      className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                      type="text"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="confirmPassword"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.confirmPassword && errors.confirmPassword && (
                      <div className="text-red-700 underline decoration-pink-500">
                        {errors.confirmPassword}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label class="block font-semibold"> Image</label>
                  <input
                    className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                    type="url"
                    id="profileImage"
                    name="profileImage"
                    placeholder="profileImage"
                    value={values.profileImage}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.profileImage && errors.profileImage && (
                    <div className="text-red-700 underline decoration-pink-500">
                      {errors.profileImage}
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  class="mt-4 bg-black text-white py-2 px-6 rounded-lg"
                >
                  Accept
                </button>
                {formularioEnviado && (
                  <p className="text-green-500">Usuario creado con exito!!</p>
                )}
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};