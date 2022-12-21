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
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const ForrmRegister = () => {
  const [formularioEnviado, setformularioEnviado] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    const files = e.target.files;
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
    <MDBContainer className="">
      <MDBRow className="">
        <MDBCol
          style={{
            padding: 0,
          }}
        >
          <MDBRow>
            <NavBar />
          </MDBRow>
          <MDBRow className="bg-[url('https://images.hola.com/fashion/imagenes/lifestyle/2019022866847/planes-marzo-madrid-arco/0-279-758/muji-a.jpg')]">
            <MDBCol>
              <h3 className="text-center mt-3">Sign Up</h3>
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
                  <Form className="" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 p-2">
                      <Form.Label className="" htmlFor="firstName">
                        First Name
                      </Form.Label>
                      <Form.Control
                        className=""
                        type="text"
                        id="first_name"
                        name="first_name"
                        placeholder="name"
                        value={values.first_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.first_name && errors.first_name && (
                        <div className="text-danger">{errors.first_name}</div>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-3 p-2">
                      <Form.Label className="" htmlFor="firstName">
                        Last Name
                      </Form.Label>
                      <Form.Control
                        className=""
                        type="text"
                        id="last_name"
                        name="last_name"
                        placeholder="last name"
                        value={values.last_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.last_name && errors.last_name && (
                        <div className="text-danger">{errors.last_name}</div>
                      )}
                    </Form.Group>

                    <Form.Group className="mb-3 p-2">
                      <Form.Label className="" htmlFor="firstName">
                        Phone Number
                      </Form.Label>
                      <Form.Control
                        className=""
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="phone number"
                        value={values.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.phoneNumber && errors.phoneNumber && (
                        <div className="text-danger">{errors.phoneNumber}</div>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-3 p-2">
                      <Form.Label className="" htmlFor="firstName">
                        Address
                      </Form.Label>
                      <Form.Control
                        className=""
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
                    </Form.Group>

                    <Form.Group className="mb-3 p-2">
                      <Form.Label className="" htmlFor="email">
                        Email
                      </Form.Label>
                      <Form.Control
                        className=""
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
                    </Form.Group>

                    <Form.Group className="mb-3 p-2">
                      <Form.Label className="" htmlFor="firstName">
                        Password
                      </Form.Label>
                      <Form.Control
                        className="b"
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
                    </Form.Group>
                    <Form.Group className="mb-3 p-2">
                      <Form.Label className="" htmlFor="firstName">
                        Confirm Password
                      </Form.Label>
                      <Form.Control
                        className=""
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="confirm password"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.confirmPassword && errors.confirmPassword && (
                        <div className="text-danger">
                          {errors.confirmPassword}
                        </div>
                      )}
                    </Form.Group>

                    <Form.Group className="mb-3 p-2">
                      <p hidden>{(values.profileImage = image)}</p>
                      <p className="text-muted">Image</p>
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
                        <img src={image} width="230px" className="mt-3" />
                      )}
                    </Form.Group>
                    <div className="mb-3 p-2">
                      <button className="" type="submit">
                        Register Account
                      </button>
                    </div>
                    <hr className="" />

                    <Link to="/login">
                      <p className="text-center" href="">
                        Already have an account? Login!
                      </p>
                    </Link>
                  </Form>
                )}
              </Formik>
            </MDBCol>
          </MDBRow>
          <MDBRow className="">
            <MDBCol>
              <Footer />
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
