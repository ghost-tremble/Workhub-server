const express = require("express");
const dotEnv = require("dotenv");
dotEnv.config();
const connectDB = require("./DB/connect");
const User = require("./Model/User");
const app = express();
const authenticationRoutes =  require("./routes/authentication")
const sample = require("./controller/sample");


// Connect Db
connectDB()

// Middleware
app.use(express.json());

//Routes
app.use("/api/v1",authenticationRoutes)




app.post("/api/user",sample);


module.exports = app;