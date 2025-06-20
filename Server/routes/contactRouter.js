const express = require("express");
const { createContact } = require("../Controller/contactControoler");
const router = express.Router();

router.post("/", createContact);

module.exports = router;
