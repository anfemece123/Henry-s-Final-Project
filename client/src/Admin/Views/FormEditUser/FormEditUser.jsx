import React, { useState } from "react";
import { Formik } from "formik";
import validate from "./validate";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { updateUser } from "../../../Redux/actions";
import { getByIdUser } from "../../../Redux/Reducer/Users";
import NavBar from "../../../User/Features/NavBar";
import Footer from "../../../User/Features/Footer";
import { Form, Button, Col, Container, Row, Image } from "react-bootstrap"
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";;

export const FormEditUser = () => {
  const [formularioEnviado, setformularioEnviado] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const infoUser = useSelector((state) => state.users.userId);
  const user = useSelector((state) => state.auth.auth);
  const [image, setImage] = useState(infoUser.profileImage);
  const [loading, setLoading] = useState(false);
  const alert = (e) => {
    if (!formularioEnviado) {
      return swal({
        title: "Are you sure?",
        text: "profile edit",
        icon: "success",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          dispatch(getByIdUser(user.id));
          swal("ok!", {
            icon: "success",
          });
        } else {
          swal("Your product is safe!");
        }
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
    <MDBContainer fluid className="p-0 m-0">
      <Row>
        <Col lg={12}>
          <NavBar />
        </Col>
        <Col lg={12} className="text-center mt-5 mb-2">
          <h1>Edit your profile</h1>
        </Col>
        <Row style={{maxWidth:"992px"}}
        className="text-center m-auto mt-5 p-3 border border-2 shadow-lg">
        <MDBCol >
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
              <Form onSubmit={handleSubmit} className="p-0 m-0">
                <Form.Group controlId="first_name">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="first_name"
                    value={values.first_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your first name"
                  />
                  {touched.first_name && errors.first_name && (
                    <Form.Text className="text-danger">
                      {errors.first_name}
                    </Form.Text>
                  )}
                </Form.Group>
                <Form.Group controlId="last_name">
                  <Form.Label> Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="last_name"
                    placeholder="Enter your last name"
                    value={values.last_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.last_name && errors.last_name && (
                    <Form.Text className="text-danger">
                      {errors.last_name}
                    </Form.Text>
                  )}
                </Form.Group>
                <Form.Group controlId="phoneNumber">
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.phoneNumber && errors.phoneNumber && (
                    <Form.Text className="text-danger">
                      {errors.phoneNumber}
                    </Form.Text>
                  )}
                </Form.Group>
                <Form.Group controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    placeholder="Enter your adress"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.address && errors.address && (
                    <Form.Text className="text-danger">
                      {errors.address}
                    </Form.Text>
                  )}
                </Form.Group>
                <Form.Group controlId="profileImage">
                  <Form.Label>File</Form.Label>
                  <Form.Control
                    type="file"
                    onChange={uploadImage}
                    name="profileImage"
                    onBlur={handleBlur}
                  />
                  {loading ? (
                    <img src="https://tradinglatam.com/wp-content/uploads/2019/04/loading-gif-png-4.gif" />
                  ) : (
                    <Image
                      src={image}
                      rounded
                      fluid
                      style={{ width: "230px" }}
                      className="mt-5"
                    />
                  )}
                </Form.Group>
                <Button className="mt-5 mb-2" onClick={alert}>
                  Done!
                </Button>
              </Form>
            )}
          </Formik>
          </MDBCol>
        </Row>
        <Col lg={12} className="mt-5">
          <Footer />
        </Col>
      </Row>
    </MDBContainer>
  );
};
