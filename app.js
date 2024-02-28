const express = require("express");
const dotEnv = require("dotenv");
dotEnv.config();
const connectDB = require("./DB/connect");

const app = express();
const authenticationRoutes =  require("./routes/authentication")
const userRoutes = require("./routes/user")
const validateToken = require("./middleware/validateToken");


// Connect Db
connectDB()

// Middleware
app.use(express.json());

//Routes
app.use("/api/v1",authenticationRoutes)


//protected routes
app.use(validateToken)
app.use("/api/v1/user",userRoutes);


module.exports = app;