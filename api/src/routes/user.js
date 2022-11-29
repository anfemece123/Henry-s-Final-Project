const express = require("express");

const createNewUser = require("../controllers/user/user.controller");

const router = express.Router();

router.post("/newUser", createNewUser);

module.exports = router;
