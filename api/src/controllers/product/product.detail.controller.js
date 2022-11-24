//product controllers
const express = require("express");
const axios = require("axios");

const { Product } = require("../../models/Product");

const Test = require("../../../seeds.js");

getDetails = async (req, res) => {
  try {
    const {id}=req.params;
    let searched=Test.find(element=>element.id==id);
    if(searched){
        res.send(searched).status(404);
    }else{
        res.send("error").status(404);
    }

  } catch (error) {
    return res.status(404).send(error);
  }
};


module.exports = getDetails;