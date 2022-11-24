//product controllers
const express = require("express");

const { Product } = require("../../db");
const Test = require("../../../seeds.js");

getAllProducts = async (req, res) => {
  const allProducts = await Product.findAll();
  if (!allProducts.length) {
    try {
      const allProductsFromDb = await Product.bulkCreate(Test);
      return res.status(200).send(allProductsFromDb);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
  try {
    const allProducts = await Product.findAll();
    res.status(200).send(allProducts);
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

getByGender = async (req, res) => {
  const { gender } = req.query;
  console.log(gender);
  try {
    const products = await Product.findAll({ where: { gender } });
    console.log(products);
    if (!products.length) return res.status(400).send("Products Not Found");
    return res.status(200).send(products);
  } catch (error) {
    console.log(error);
    return res.status(404).send(error.message);
  }
};

module.exports = { getAllProducts, getByGender };
