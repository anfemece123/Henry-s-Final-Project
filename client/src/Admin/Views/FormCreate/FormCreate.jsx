import React, { useState } from "react";
import { Formik } from "formik";
import validate from "./validate";
import swal from "sweetalert";

import { useDispatch } from "react-redux";
import { formCreate } from "../../../Redux/actions/index";
import { Link } from "react-router-dom";
import NavBar from "../../../User/Features/NavBar";

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
    <div>
      <NavBar />
      <div>
        <span>Form Create</span>
        <div>
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
                <div></div>
                <div>
                  <div>
                    <label for="grid-first-name">Title</label>
                    <input
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
                  <div>
                    <label> Category</label>

                    <select
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
                <div>
                  <div>
                    <label> Price</label>
                    <input
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
                    <label> Stock</label>
                    <input
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
                  <label> color</label>

                  <div x-data="app">
                    <div>
                      <input
                        type="radio"
                        id="1"
                        name="option"
                        value="blue"
                        checked={values.color === "blue"}
                        onChange={() => setFieldValue("color", "blue")}
                        onBlur={handleBlur}
                      />

                      <label for="1">blue</label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        id="2"
                        name="option"
                        value="white"
                        checked={values.color === "white"}
                        onChange={() => setFieldValue("color", "white")}
                        onBlur={handleBlur}
                      />
                      <label for="2">white</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="3"
                        name="option"
                        value="black"
                        checked={values.color === "black"}
                        onChange={() => setFieldValue("color", "black")}
                        onBlur={handleBlur}
                      />
                      <label for="3">black</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="4"
                        name="option"
                        value="red"
                        checked={values.color === "red"}
                        onChange={() => setFieldValue("color", "red")}
                        onBlur={handleBlur}
                      />
                      <label for="4">red</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="5"
                        name="option"
                        value="yellow"
                        checked={values.color === "yellow"}
                        onChange={() => setFieldValue("color", "yellow")}
                        onBlur={handleBlur}
                      />
                      <label for="5">yellow</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="6"
                        name="option"
                        value="green"
                        checked={values.color === "green"}
                        onChange={() => setFieldValue("color", "green")}
                        onBlur={handleBlur}
                      />
                      <label for="6">green</label>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <label> Size</label>

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
                    <label> Gender</label>
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
                </div>
                <div>
                  <p hidden>{(values.image = image)}</p>

                  <label> Image</label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={uploadImage}
                    onBlur={handleBlur}
                  />

                  {loading ? (
                    <img src="https://tradinglatam.com/wp-content/uploads/2019/04/loading-gif-png-4.gif" />
                  ) : (
                    <img src={image} width="230px" />
                  )}
                </div>
                <div>
                  <label> Season</label>
                  <select
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

                <button type="submit" onClick={alert}>
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
