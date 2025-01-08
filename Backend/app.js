const dotnev = require("dotenv");
dotnev.config();
const morgan = require("morgan");
const cors = require("cors");
const express = require("express");
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
