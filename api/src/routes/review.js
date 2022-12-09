const express = require("express");
const {
  verifyToken,
  verifyTokenAndIsAdmin,
} = require("../middlewares/verifyUser");

const createReview = require("../controllers/review/review.controller");

const router = express.Router();

router.post("/newReview/:productId", verifyToken, createReview); //tiene que ser un usuario loggueado el que mande una review

module.exports = router;
