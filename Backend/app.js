const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan");
const cors = require("cors");
const express = require("express");
const connectToDb = require("./db/db");
const app = express();

connectToDb();
app.use(morgan("dev"));
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
