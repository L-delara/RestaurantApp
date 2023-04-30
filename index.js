const express = require("express");
require("dotenv").config();
const placesController = require("./controllers/places");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Page</h1>");
});

//routes
app.use("/breads", placesController);
const PORT = process.env.PORT;
app.listen(PORT, console.log(`listening on port ${PORT}`));
