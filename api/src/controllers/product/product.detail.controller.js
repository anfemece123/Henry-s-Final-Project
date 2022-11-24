//product controllers
const express = require("express");

const { Product } = require("../../db");

const Test = require("../../../seeds.js");

getDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const productDetail = await Product.findByPk(id);
    if (!productDetail) return res.status(400).send("Product Not Found");
    return res.status(200).send(productDetail);
  } catch (error) {
    return res.status(404).send(error);
  }
};

module.exports = getDetails;
