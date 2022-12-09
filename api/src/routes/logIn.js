const express = require("express");

const {
  logInUser,
  logInGoogle,
} = require("../controllers/logIn/logIn.controller");

const router = express.Router();

router.post("/", logInUser);
router.post("/googleLogIn", logInGoogle);

module.exports = router;
