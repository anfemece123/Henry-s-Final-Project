//product controllers
const express = require('express');
const axios = require('axios');

const { Product } = require("../../models/Product");

getAllProducts = async (req, res) => {
    try {
        console.log("esta ruta funciona")
        return res.status(200).send("funciona");
    } catch (error) {
        return res.status(404).send(error.message)
    }
};

module.exports = getAllProducts;