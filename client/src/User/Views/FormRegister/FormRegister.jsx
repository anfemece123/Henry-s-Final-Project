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
