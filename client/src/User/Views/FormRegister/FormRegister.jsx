import React, { useState } from "react";
import { Formik } from "formik";
import validate from "./validate";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { formRegister } from "../../../Redux/actions";
// import { Link } from "react-router-dom";
import swal from "sweetalert";
import NavBar from "../../Features/NavBar";
import Footer from "../../Features/Footer";

export const ForrmRegister = () => {
  const [formularioEnviado, setformularioEnviado] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    const files = e.target.files;
    console.log("FILES", files);
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ecommerce");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dyfjoi0td/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setImage(file.secure_url);
    console.log(file.secure_url);
    setLoading(false);
  };

  return (
    <body class="font-mono bg-gray-400 h-full">
      <NavBar />
      <div class="container mx-auto">
        <div class="flex justify-center px-6 my-12">
          <div class="w-full xl:w-3/4 lg:w-11/12 flex">
            <div
              class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg bg-[url('https://images.hola.com/fashion/imagenes/lifestyle/2019022866847/planes-marzo-madrid-arco/0-279-758/muji-a.jpg')]"
              // style="background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')"
            ></div>

            <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 class="pt-4 text-2xl text-center">Sing Up</h3>
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
                  isAdmin: Boolean,
                }}
                onSubmit={(values, { resetForm }) => {
                  dispatch(formRegister(values));
                  resetForm();
                  setformularioEnviado(true);
                  swal({
                    title: "Excellent!",
                    text: "Remember to verify it! Check your email",
                    icon: "success",
                  });
                  navigate("/login");
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
                  <form
                    class="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                    onSubmit={handleSubmit}
                  >
                    <div class="mb-4 md:flex md:justify-between">
                      <div class="mb-4 md:mr-2 md:mb-0">
                        <label
                          class="block mb-2 text-sm font-bold text-gray-700"
                          for="firstName"
                        >
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
                          <div class="text-xs italic text-red-500">
                            {errors.first_name}
                          </div>
                        )}
                      </div>
                      <div class="mb-4 md:mr-2 md:mb-0">
                        <label
                          class="block mb-2 text-sm font-bold text-gray-700"
                          for="firstName"
                        >
                          Last name
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
                          <div class="text-xs italic text-red-500">
                            {errors.last_name}
                          </div>
                        )}
                      </div>
                    </div>
                    <div class="mb-4 md:flex md:justify-between">
                      <div class="mb-4 md:mr-2 md:mb-0">
                        <label
                          class="block mb-2 text-sm font-bold text-gray-700"
                          for="firstName"
                        >
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
                          <div class="text-xs italic text-red-500">
                            {errors.phoneNumber}
                          </div>
                        )}
                      </div>
                      <div class="mb-4 md:mr-2 md:mb-0">
                        <label
                          class="block mb-2 text-sm font-bold text-gray-700"
                          for="firstName"
                        >
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
                          <div class="text-xs italic text-red-500">
                            {errors.address}
                          </div>
                        )}
                      </div>
                    </div>

                    <div class="mb-4">
                      <label
                        class="block mb-2 text-sm font-bold text-gray-700"
                        for="email"
                      >
                        Email
                      </label>
                      <input
                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.email && errors.email && (
                        <div class="text-xs italic text-red-500">
                          {errors.email}
                        </div>
                      )}
                    </div>

                    <div class="mb-4 md:flex md:justify-between">
                      <div class="mb-4 md:mr-2 md:mb-0">
                        <label
                          class="block mb-2 text-sm font-bold text-gray-700"
                          for="firstName"
                        >
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
                          <div class="text-xs italic text-red-500">
                            {errors.password}
                          </div>
                        )}
                      </div>
                      <div class="mb-4 md:mr-2 md:mb-0">
                        <label
                          class="block mb-2 text-sm font-bold text-gray-700"
                          for="firstName"
                        >
                          Confirm Password
                        </label>
                        <input
                          className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          placeholder="confirmPassword"
                          value={values.confirmPassword}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.confirmPassword && errors.confirmPassword && (
                          <div class="text-xs italic text-red-500">
                            {errors.confirmPassword}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="pb-3">
                      <p hidden>{(values.profileImage = image)}</p>
                      <label class="pb-4 block font-semibold"> Image</label>
                      <input
                        type="file"
                        id="profileImage"
                        name="profileImage"
                        onChange={uploadImage}
                        onBlur={handleBlur}
                      />
                      {loading ? (
                        <img src="https://tradinglatam.com/wp-content/uploads/2019/04/loading-gif-png-4.gif" />
                      ) : (
                        <img src={image} width="230px" />
                      )}
                    </div>
                    <div class="mb-6 text-center">
                      <button
                        class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                        type="submit"
                      >
                        Register Account
                      </button>
                    </div>
                    <hr class="mb-6 border-t" />
                    {/* <div class="text-center">
                      <a
                        class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                        href="#"
                      >
                        Forgot Password?
                      </a>
                    </div> */}

                    <div class="text-center">
                      <Link to="/login">
                        <a
                          class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                          href=""
                        >
                          Already have an account? Login!
                        </a>
                      </Link>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};
