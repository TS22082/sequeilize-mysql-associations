const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const postRoutes = require("./controllers/post-routes");
app.use("/api/post", postRoutes);

const authorRoutes = require("./controllers/author-routes");
app.use("/api/author", authorRoutes);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
