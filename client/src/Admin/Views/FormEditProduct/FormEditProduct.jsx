import React, { useState } from "react";
import { Formik } from "formik";
import validate from "./validate";
import swal from "sweetalert";

import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../../Redux/actions";
import { useNavigate } from "react-router-dom";
import NavBar from "../../../User/Features/NavBar";

export const FormEditProduct = () => {
  const [formularioEnviado, setformularioEnviado] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productId = useSelector((state) => state.allProducts.productId);
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
  const [image, setImage] = useState(productId.image);
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
    // console.log(res);
    setImage(file.secure_url);
    console.log(file.secure_url);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 antialiased  flex flex-col justify-center ">
      <NavBar />
      <div class="relative py-3 sm:max-w-xl mx-auto text-center">
        <span class="text-2xl font-light">Form Edit Product</span>
        <div class="w-50 max-w-lg">
          <Formik
            initialValues={{
              title: productId.title,
              category: productId.category,
              color: productId.color,
              season: productId.season,
              price: productId.price,
              size: productId.size,
              gender: productId.gender,
              stock: productId.stock,
              image: productId.image,
            }}
            onSubmit={(values, { resetForm }) => {
              const data = {
                title: values.title,
                category: values.category,

                color: values.color,
                season: values.season,
                price: values.price,
                size: values.size,
                gender: values.gender,
                stock: values.stock,
                image: values.image,
              };

              dispatch(updateProduct(productId.id, data));
              console.log("values en formulario", values);
              console.log("id en formulario", productId.id);
              resetForm();
              setformularioEnviado(true);
              setTimeout(() => setformularioEnviado(false), 5000);
              navigate("/admin/tables");
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
                <div className="w-full px-3"></div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block font-semibold" for="grid-first-name">
                      Title
                    </label>
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
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block font-semibold"> Category</label>

                    <select
                      className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      type="text"
                      id="category"
                      name="category"
                      value={values.category}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="">------</option>
                      <option value="shirts">Shirt</option>
                      <option value="t-shirts">t-shirt</option>
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
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block font-semibold"> Price</label>
                    <input
                      className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
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
                    <label class="block font-semibold"> Stock</label>
                    <input
                      className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
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
                  <label class="font-semibold"> color</label>
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
                        value="blue"
                        checked={values.color === "blue"}
                        onChange={() => setFieldValue("color", "blue")}
                        onBlur={handleBlur}
                      />
                      <label
                        for="1"
                        class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                      >
                        blue
                      </label>
                    </div>
                    <div>
                      <input
                        class="peer hidden"
                        type="radio"
                        id="2"
                        name="option"
                        value="white"
                        checked={values.color === "white"}
                        onChange={() => setFieldValue("color", "white")}
                        onBlur={handleBlur}
                      />
                      <label
                        for="2"
                        class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-white peer-checked:font-bold peer-checked:text-black"
                      >
                        white
                      </label>
                    </div>
                    <div>
                      <input
                        class="peer hidden"
                        type="radio"
                        id="3"
                        name="option"
                        value="black"
                        checked={values.color === "black"}
                        onChange={() => setFieldValue("color", "black")}
                        onBlur={handleBlur}
                      />
                      <label
                        for="3"
                        class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-black peer-checked:font-bold peer-checked:text-white"
                      >
                        black
                      </label>
                    </div>
                    <div>
                      <input
                        class="peer hidden"
                        type="radio"
                        id="4"
                        name="option"
                        value="red"
                        checked={values.color === "red"}
                        onChange={() => setFieldValue("color", "red")}
                        onBlur={handleBlur}
                      />
                      <label
                        for="4"
                        class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-red-600 peer-checked:font-bold peer-checked:text-white"
                      >
                        red
                      </label>
                    </div>
                    <div>
                      <input
                        class="peer hidden"
                        type="radio"
                        id="5"
                        name="option"
                        value="yellow"
                        checked={values.color === "yellow"}
                        onChange={() => setFieldValue("color", "yellow")}
                        onBlur={handleBlur}
                      />
                      <label
                        for="5"
                        class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-yellow-400 peer-checked:font-bold peer-checked:text-white"
                      >
                        yellow
                      </label>
                    </div>
                    <div>
                      <input
                        class="peer hidden"
                        type="radio"
                        id="6"
                        name="option"
                        value="green"
                        checked={values.color === "green"}
                        onChange={() => setFieldValue("color", "green")}
                        onBlur={handleBlur}
                      />
                      <label
                        for="6"
                        class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-green-500 peer-checked:font-bold peer-checked:text-white"
                      >
                        green
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block font-semibold"> Size</label>

                    <select
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
                    </select>
                    {touched.size && errors.size && (
                      <div className="text-red-700 underline decoration-pink-500">
                        {errors.size}
                      </div>
                    )}
                  </div>

                  <div className="w-full md:w-1/2 px-3">
                    <label class="block font-semibold"> Gender</label>
                    <select
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      type="text "
                      id="gender"
                      name="gender"
                      placeholder="gender"
                      value={values.gender}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option> ---- </option>
                      <option> other </option>
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

                  <label class="block font-semibold"> Image</label>
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
                  <label class="block font-semibold"> Season</label>
                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
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
                <button
                  class="mt-4 bg-black text-white py-2 px-6 rounded-lg"
                  onClick={alert}
                >
                  Edit product
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
