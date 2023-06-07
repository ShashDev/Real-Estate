require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const customerRouter = require("./routes/customer");

app.use("/customer", customerRouter);
const { connectDB } = require("./config/dbConfig");
const startServer = async function () {
  try {
    await connectDB();
    app.listen((port = 5000), () => {
      console.log("Server running on port : ", port);
    });
  } catch (error) {
    console.log("Error in starting the server");
  }
};

startServer();
