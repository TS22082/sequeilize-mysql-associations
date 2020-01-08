const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../views/home.html"));
});

router.get("/showcase", (req, res) => {
  // console.log(req.query);
  res.sendFile(path.join(__dirname, "../../views/showcase.html"));
});

module.exports = router;
