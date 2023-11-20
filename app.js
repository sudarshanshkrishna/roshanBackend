require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("DB CONNECTED SUCCESSFULLY !!!...");
  })
  .catch(console.log("OOPS !!! DB CONNECTIOB FAILED"));

const port = process.env.PORT ? process.env.PORT : 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/signin", (req, res) => {
  res.send("signedin");
});
app.listen(port, () =>
  console.log(`pricepredictorbackend server running on port: ${port} .....`)
);
