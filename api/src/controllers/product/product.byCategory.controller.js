//product controllers
const express = require("express");
const axios = require("axios");

const { Product } = require("../../db");

getByCategory = async (req, res) => {
  try {
    const { category } = req.query;

    let products = await Product.findAll({ where: { category } });
    if (!products.length) return res.status(400).send("Product Not Found");
    return res.status(200).send(products);
  } catch (error) {
    return res.status(404).send(error);
  }
};

module.exports = getByCategory;
