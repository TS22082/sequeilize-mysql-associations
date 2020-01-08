const express = require("express");
const router = express.Router();
const db = require("../../models");

router.get("/", (req, res) => {
  db.Author.findAll({
    include: [db.Post]
  }).then(dbAuthor => {
    res.json(dbAuthor);
  });
});

router.post("/", (req, res) => {
  db.Author.create({
    name: req.body.name
  }).then(result => {
    res.json(result);
  });
});

module.exports = router;
