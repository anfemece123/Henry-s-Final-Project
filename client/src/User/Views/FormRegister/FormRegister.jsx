import React, { useState } from "react";
import { Formik } from "formik";
import validate from "./validate";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { formRegister } from "../../../Redux/actions";
import swal from "sweetalert";
import Navigation from "../../Features/Navigation";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/esm/Button";
import style from "../../../Assets/globalStyles.module.css";
import Footer from "../../Features/Footer";
export const ForrmRegister = () => {
  const [formularioEnviado, setformularioEnviado] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
<<<<<<< HEAD
    <Container
      className={`min-vh-100 border border-dark shadow-lg ${style.formRegister}`}
    >
      <Navigation />
      <div className="text-center mb-5 fs-2 text-dark">
        <span>Form Register</span>
      </div>
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
          // console.log(values);
          resetForm();
          setformularioEnviado(true);
          swal({
            title: "Excellent!",
            text: "You maded your account!",
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
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            {console.log(values)}
            <Stack
              direction="vertical"
              gap={3}
              className="d-flex align-items-center"
            >
              <div>
                <input
                  className="form-control"
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="First name"
                  value={values.first_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.first_name && errors.first_name && (
                  <div className="text-danger">{errors.first_name}</div>
                )}
              </div>
              <div>
                <input
                  className="form-control"
                  type="text"
                  id="last_name"
                  name="last_name"
                  placeholder="Last name"
                  value={values.last_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.last_name && errors.last_name && (
                  <div className="text-danger">{errors.last_name}</div>
                )}
              </div>
              <div>
                <input
                  className="form-control"
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone number"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.phoneNumber && errors.phoneNumber && (
                  <div className="text-danger">{errors.phoneNumber}</div>
                )}
              </div>
              <div>
                <input
                  className="form-control"
                  type="text"
                  id="address"
                  name="address"
                  placeholder="address"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.address && errors.address && (
                  <div className="text-danger">{errors.address}</div>
                )}
              </div>
              <div>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.email && errors.email && (
                  <div className="text-danger">{errors.email}</div>
                )}
              </div>
              <div>
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.password && errors.password && (
                  <div className="text-danger">{errors.password}</div>
                )}
              </div>
              <div>
                <input
                  className="form-control"
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <div className="text-danger">{errors.confirmPassword}</div>
                )}
              </div>
              <div>
                <input
                  className="form-control"
                  type="file"
                  id="profileImage"
                  name="profileImage"
                  placeholder="Profile Picture"
                  value={values.profileImage}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.profileImage && errors.profileImage && (
                  <div className="text-danger">{errors.profileImage}</div>
                )}
              </div>
              <div>
                <Button type="submit" className="">
=======
    <div className="min-h-screen bg-gray-100 text-gray-800 antialiased  flex flex-col justify-center ">
      <NavBar />
      <div class="relative py-3 sm:max-w-xl mx-auto text-center">
        {/* <button className=" h-10 no-underline box-border bg-slate-900 text-slate-50 rounded flex p-2 justify-center items-center transition hover:bg-slate-50 hover:text-slate-900 hover:border-2 hover:border-slate-900">
          <Link to="/home">Inicio</Link>
        </button> */}
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
              isAdmin: Boolean,
            }}
            onSubmit={(values, { resetForm }) => {
              dispatch(formRegister(values));
              // console.log(values);
              resetForm();
              setformularioEnviado(true);
              swal({
                title: "Excellent!",
                text: "You maded your account!",
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
              // setFieldValue,
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
                      type="password"
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
                {/* <div>
                  <label class="font-semibold"> isAdmin </label>
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
                        value={true}
                        checked={values.isAdmin === true}
                        onChange={() => setFieldValue("isAdmin", true)}
                        onBlur={handleBlur}
                      />

                      <label
                        for="1"
                        class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                      >
                        yes
                      </label>
                    </div>
                    <div>
                      <input
                        class="peer hidden"
                        type="radio"
                        id="2"
                        name="option"
                        // value={false}
                        checked={values.isAdmin === false}
                        onChange={() => setFieldValue("isAdmin", false)}
                        onBlur={handleBlur}
                      />

                      <label
                        for="2"
                        class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-red-600 peer-checked:font-bold peer-checked:text-white"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div> */}
                <button
                  type="submit"
                  class="mt-4 bg-black text-white py-2 px-6 rounded-lg"
                >
>>>>>>> 76067c91cfd75bc5ed2bc87e34870884f37afd5e
                  Accept
                </Button>
              </div>
            </Stack>
          </form>
        )}
      </Formik>

      <div className="position-relative">
        <div className="fixed-bottom">
          <Footer />
        </div>
      </div>
    </Container>
  );
};
