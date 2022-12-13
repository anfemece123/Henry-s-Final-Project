import React, { useState } from "react";
import { Formik } from "formik";
import validate from "./validate";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import swal from "sweetalert";
import { updateUser } from "../../../Redux/actions";
import { getByIdUser } from "../../../Redux/Reducer/Users";
import NavBar from "../../../User/Features/NavBar";

export const FormEditUser = () => {
  const [formularioEnviado, setformularioEnviado] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const infoUser = useSelector((state) => state.users.userId);
  const [image, setImage] = useState(infoUser.profileImage);
  const [loading, setLoading] = useState(false);
  const alert = (e) => {
    if (!formularioEnviado) {
      return swal({
        title: "Success!",
        text: "User modified successfuly!",
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
    <div className="min-h-screen bg-gray-100 text-gray-800 antialiased  flex flex-col">
      <NavBar />
      <div class="relative py-3 sm:max-w-xl mx-auto text-center">
        <span class="text-2xl font-light">Form Edit profile</span>
        <div class="w-50 max-w-lg">
          <Formik
            initialValues={{
              first_name: infoUser.first_name,
              last_name: infoUser.last_name,
              phoneNumber: infoUser.phoneNumber,
              address: infoUser.address,
              profileImage: infoUser.profileImage,
              isAdmin: Boolean,
            }}
            onSubmit={(values, { resetForm }) => {
              dispatch(updateUser(infoUser.id, values));
              console.log("info en registro", infoUser.id);
              console.log("objeto en registro", values);
              resetForm();
              setformularioEnviado(true);
              swal({
                title: "Excellent!",
                text: "Remember to verify it! Check your email",
                icon: "success",
              });
              navigate("/profile");
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
                <div className="flex flex-wrap -mx-3 mb-6"></div>
                <div>
                  <p hidden>{(values.profileImage = image)}</p>
                  <label class="block font-semibold"> Image</label>
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
                <button
                  onClick={alert}
                  class="mt-4 bg-black text-white py-2 px-6 rounded-lg"
                >
                  Edit User
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
