require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//My routes
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("DB CONNECTED SUCCESSFULLY !!!...");
  })
  .catch(console.log("OOPS !!! DB CONNECTIOB FAILED"));

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use("/api", authRoutes);

app.use("/api", userRoutes);

// app.get("/", (req, res) => {
//   res.send("hello world");
// });
// app.get("/signin", (req, res) => {
//   res.send("signedin");
// });

const port = process.env.PORT ? process.env.PORT : 3000;

app.listen(port, () =>
  console.log(`pricepredictorbackend server running on port: ${port} .....`)
);
