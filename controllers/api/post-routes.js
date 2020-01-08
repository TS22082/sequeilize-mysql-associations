const express = require("express");
const router = express.Router();
const db = require("../../models");

router.get("/:id", (req, res) => {
  db.Post.findAll({
    where: { AuthorId: req.params.id },
    include: [db.Author]
  }).then(dbPost => {
    res.json(dbPost);
  });
});

router.post("/", (req, res) => {
  db.Post.create({
    title: req.body.title,
    body: req.body.body,
    AuthorId: req.body.AuthorId
  }).then(dbPost => {
    res.json(dbPost);
  });
});

module.exports = router;
