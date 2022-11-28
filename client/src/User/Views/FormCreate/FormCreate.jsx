import React, { useState } from "react";
import { Formik } from "formik";
import validate from "./validate";

import { useDispatch } from "react-redux";
import { formCreate } from "../../../Redux/actions";
import { Link } from "react-router-dom";

export const FormCreate = () => {
  const [formularioEnviado, setformularioEnviado] = useState(false);
  const dispatch = useDispatch();
  return (
    <div>
      <button>
        <Link to="/home">Inicio</Link>
      </button>

      <span>Form Create</span>

      <Formik
        initialValues={{
          id: "",
          title: "",
          category: "",
          //   isOnSale: "",
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
        }) => (
          <form onSubmit={handleSubmit}>
            <label class="block font-semibold"> id</label>
            <input
              type="id"
              id="id"
              name="id"
              placeholder="id"
              value={values.id}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.id && errors.id && <div>{errors.id}</div>}

            <label> title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.title && errors.title && <div>{errors.title}</div>}

            <label> Category</label>
            <input
              type="text"
              id="category"
              name="category"
              placeholder="Category"
              value={values.category}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.category && errors.category && (
              <div>{errors.category}</div>
            )}

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
            {touched.season && errors.season && <div>{errors.season}</div>}

            <label> color</label>
            <input
              type="text"
              id="color"
              name="color"
              placeholder="color"
              value={values.color}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.color && errors.color && <div>{errors.color}</div>}

            <label> price</label>
            <input
              type="text"
              id="price"
              name="price"
              placeholder="price"
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.price && errors.price && <div>{errors.price}</div>}

            <label class="block font-semibold"> size</label>

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
            {touched.size && errors.size && <div>{errors.size}</div>}

            <label> stock</label>
            <input
              type="text"
              id="stock"
              name="stock"
              placeholder="stock"
              value={values.stock}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.stock && errors.stock && <div>{errors.stock}</div>}

            <label> gender</label>
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
            {touched.gender && errors.gender && <div>{errors.gender}</div>}

            <label> image</label>
            <input
              type="url"
              id="image"
              name="image"
              placeholder="image"
              value={values.image}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.image && errors.image && <div>{errors.image}</div>}

            {/* <div>
              <label> isOnSale</label>
              <input
                type="text"
                id="isOnSale"
                name="isOnSale"
                placeholder="isOnSale"
                value={values.isOnSale}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.isOnSale && errors.isOnSale && (
                <div>{errors.isOnSale}</div>
              )} */}
            {/* </div> */}

            <button type="submit">Accept</button>

            {formularioEnviado && <p>Prenda creada con exito!!</p>}
          </form>
        )}
      </Formik>
    </div>
  );
};
