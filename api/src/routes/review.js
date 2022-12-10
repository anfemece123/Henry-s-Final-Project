const express = require("express");
const {
  verifyToken,
  verifyTokenAndIsAdmin,
} = require("../middlewares/verifyUser");

const {
  createReview,
  getAllReviews,
  getOrderDetail,
  changeVisibility,
} = require("../controllers/review/review.controller");

const router = express.Router();

router.post("/newReview/:productId", verifyToken, createReview); //tiene que ser un usuario loggueado el que mande una review
router.get("/allReviews", getAllReviews);
router.get("/:id", getOrderDetail);
router.put("/update/:idReview", changeVisibility);

module.exports = router;
