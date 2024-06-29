const express = require("express");
const router = express.Router();

const login = require("../controller/loginController");
const addData = require("../controller/addDataController");
const creditData = require("../controller/creditController");
const debitData = require("../controller/debitDataController");
const getData = require("../controller/getDataController");

router.post("/login", login);

router.post("/addData", addData);

router.put("/creditData", creditData);

router.put("/debitData", debitData);

router.get("/getData", getData);

module.exports = router;
