const express = require("express");

const createReview = require("../controllers/review/review.controller");

const router = express.Router();

router.post("/newReview/:idProduct", createReview);

module.exports = router;
