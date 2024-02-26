const express = require("express");
const dotEnv = require("dotenv");
dotEnv.config();
const connectDB = require("./DB/connect");
const User = require("./Model/User");
const app = express();
const sample = require("./controller/sample");

app.use(express.json());

connectDB()

app.post("/api/user",sample);


module.exports = app;