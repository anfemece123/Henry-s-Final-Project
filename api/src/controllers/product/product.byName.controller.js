//product controllers
const express = require("express");
const axios = require("axios");

const { Product } = require("../../db");

getByTitle = async (req, res) => {
  try {
    const {title}=req.query;
    let products = await Product.findAll();
    let searched=products.filter(element=>element.title.toLowerCase().includes(title.toLowerCase()));
    if (!searched.length) return res.status(400).send("Product Not Found");
      return res.status(200).send(searched);
  } catch (error) {
    return res.status(404).send(error);
  }
};

module.exports = getByTitle;
