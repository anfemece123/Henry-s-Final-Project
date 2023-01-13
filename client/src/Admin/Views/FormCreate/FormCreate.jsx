import React, { useState } from "react";
import { Formik } from "formik";
import validate from "./validate";
import swal from "sweetalert";

import { useDispatch } from "react-redux";
import { formCreate } from "../../../Redux/actions/index";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../../User/Features/NavBar";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import Form from "react-bootstrap/Form";


export const FormCreate = () => {
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
    setLoading(false);
  };

  return (
    <MDBContainer className="fluid min-vw-100">
      <MDBRow className="">
        <MDBCol
          style={{
            padding: 0,
          }}
        >
        <MDBRow>
           <MDBCol className="">
            <NavBar />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol
                sm="0"
                md="0"
                lg="6"
                style={{
                  backgroundImage:
                    "url('https://images.hola.com/fashion/imagenes/lifestyle/2019022866847/planes-marzo-madrid-arco/0-279-758/muji-a.jpg')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                }}
              >
            </MDBCol>
            <MDBCol lg="6" style={{ paddingInline: "10%" }} className="">
              <h3 className="text-center mt-3">Create New Product</h3>
              <Formik
                initialValues={{
                  title: "",
                  category: "",
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
                  resetForm();
                  setformularioEnviado(true);
                  swal({
                  title: "Done!",
                  text: "Product created!",
                  icon: "success",
                });
                navigate("/admin");
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
                  <Form onSubmit={handleSubmit}>
                    {console.log(values)}
                    
                      <Form.Group className="mb-3 p-2">
                        <Form.Label htmlFor="grid-first-name">
                          Title
                        </Form.Label>
                        {/* <input
                          type="text"
                          id="title"
                          name="title"
                          placeholder="Title"
                          value={values.title}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        /> */}
                        <Form.Control
                          className=""
                          type="text"
                          id="title"
                          name="title"
                          placeholder="Title"
                          value={values.title}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.title && errors.title && (
                          <div className="text-danger">
                            {errors.title}
                          </div>
                        )}
                      </Form.Group>
                      <Form.Group className="mb-3 p-2">
                        <Form.Label className="" htmlFor="firstName">
                          Category 
                        </Form.Label>

                        <Form.Select
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
                        </Form.Select>
                        {touched.category && errors.size && (
                          <div className="text-red-700 underline decoration-pink-500">
                            {errors.category}
                          </div>
                        )}
                      </Form.Group>
                      <Form.Group className="mb-3 p-2">
                        <Form.Label className="block font-semibold">
                          Price 
                        </Form.Label>
                        <Form.Control
                          className="hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
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
                      </Form.Group>
                      <Form.Group className="mb-3 p-2">
                        <Form.Label className="block font-semibold">
                          Stock
                        </Form.Label>
                        <Form.Control
                            className="hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
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
                      </Form.Group>
                    <Form.Group className="mb-3 p-2">
                      <Form.Label className="font-semibold">
                        Color
                      </Form.Label>

                      <div x-data="app">
                        
                          <input
                            className="peer hidden"
                            type="radio"
                            id="1"
                            name="option"
                            value="blue"
                            checked={values.color === "blue"}
                            onChange={() => setFieldValue("color", "blue")}
                            onBlur={handleBlur}
                          />

                          <label 
                            htmlFor="1"
                            className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                            >
                            blue
                          </label>
                        </div>
                        <div>
                          <input
                            className="peer hidden"
                            type="radio"
                            id="2"
                            name="option"
                            value="white"
                            checked={values.color === "white"}
                            onChange={() => setFieldValue("color", "white")}
                            onBlur={handleBlur}
                          />
                          <label htmlFor="2"
                                className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-white peer-checked:font-bold peer-checked:text-black"
                          >
                          white
                          </label>
                        </div>
                        <div>
                          <input
                            className="peer hidden"
                            type="radio"
                            id="3"
                            name="option"
                            value="black"
                            checked={values.color === "black"}
                            onChange={() => setFieldValue("color", "black")}
                            onBlur={handleBlur}
                          />
                          <label 
                            htmlFor="3"
                            className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-black peer-checked:font-bold peer-checked:text-white"
                          >
                          black
                          </label>
                        </div>
                        <div>
                          <input
                            className="peer hidden"
                            type="radio"
                            id="4"
                            name="option"
                            value="red"
                            checked={values.color === "red"}
                            onChange={() => setFieldValue("color", "red")}
                            onBlur={handleBlur}
                          />
                          <label 
                            htmlFor="4"
                              className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-red-600 peer-checked:font-bold peer-checked:text-white">red
                            </label>
                        </div>
                        <div>
                          <input
                            className="peer hidden"
                            type="radio"
                            id="5"
                            name="option"
                            value="yellow"
                            checked={values.color === "yellow"}
                            onChange={() => setFieldValue("color", "yellow")}
                            onBlur={handleBlur}
                          />
                          <label 
                            htmlFor="5"
                            className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-yellow-400 peer-checked:font-bold peer-checked:text-white"
                            >
                            yellow
                          </label>
                        </div>
                        <div>
                          <input
                            className="peer hidden"
                            type="radio"
                            id="6"
                            name="option"
                            value="green"
                            checked={values.color === "green"}
                            onChange={() => setFieldValue("color", "green")}
                            onBlur={handleBlur}
                          />
                          <label 
                            htmlFor="6"
                            className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-green-500 peer-checked:font-bold peer-checked:text-white"
                            >
                            green
                          </label>
                        
                      </div>
                    </Form.Group>
                    <Form.Group className="mb-3 p-2">
                      <Form.Label className="block font-semibold"> 
                      Size
                      </Form.Label>

                      <Form.Select
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
                        </Form.Select>
                        {touched.size && errors.size && (
                          <div className="text-red-700 underline decoration-pink-500">
                            {errors.size}
                          </div>
                        )}
                    </Form.Group>
                    <Form.Group className="mb-3 p-2">
                          <Form.Label
                          className="block font-semibold"
                          > 
                            Gender
                          </Form.Label>
                          <Form.Select
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
                            <option> other </option>
                            <option>female</option>
                            <option>male</option>
                          </Form.Select>
                          {touched.gender && errors.gender && (
                            <div className="text-red-700 underline decoration-pink-500">
                              {errors.gender}
                            </div>
                          )}
                      </Form.Group>
                      <Form.Group className="mb-3 p-2">
                        <p hidden>{(values.image = image)}</p>

                        <p className="text-muted"> Image</p>
                        <MDBInputGroup
                          className="mb-3"
                          textBefore="Upload"
                          textTag="label"
                          textProps={{ htmlFor: "inputGroupFile01" }}
                        >
                        <input
                          className="form-control"
                          type="file"
                          id="image"
                          name="image"
                          onChange={uploadImage}
                          onBlur={handleBlur}
                        />
                        </MDBInputGroup>

                        {loading ? (
                          <img src="https://tradinglatam.com/wp-content/uploads/2019/04/loading-gif-png-4.gif" />
                        ) : (
                          <img src={image} width="230px"
                          className="mt-3" />
                        )}
                      </Form.Group>
                      <Form.Group className="mb-3 p-2">
                        <Form.Label className="block font-semibold"> Season</Form.Label>
                        <Form.Select
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                        </Form.Select>
                        {touched.season && errors.season && (
                          <div className="text-red-700 underline decoration-pink-500">
                            {errors.season}
                          </div>
                        )}
                      </Form.Group>
                      {/* <button type="submit" onClick={alert}>
                      Create
                      </button> */}
                      <div className="mb-3 p-2">
                        <MDBBtn color="primary" outline type="submit">
                          Create!
                        </MDBBtn>
                      </div>
                  </Form>
                )}
              </Formik>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
