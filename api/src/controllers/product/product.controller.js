//product controllers
const express = require("express");
const axios = require("axios");

const { Product } = require("../../models/Product");
const Test = require("../../../seeds.js");

getAllProducts = async (req, res) => {
  try {
    res.status(202).send(Test);
  } catch (error) {
    return res.status(404).send(error);
  }
};

module.exports = getAllProducts;
