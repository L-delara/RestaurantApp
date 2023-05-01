require("dotenv").config();
const express = require("express");
const app = express();

app.use("/places", require("./controllers/places"));

app.get("/", (req, res) => {
  res.send("Hello world! Welcome to home!");
});

app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Page</h1>");
});

//routes

const PORT = process.env.PORT;

app.listen(PORT, console.log(`listening on port ${PORT}`));
