const express = require("express");
const dotEnv = require("dotenv");
const booking  = require("./routes/booking");
const workspaces  = require("./routes/workspaces");
dotEnv.config();
const connectDB = require("./DB/connect");
const path = require("path");
const fs = require("fs");
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

//application media
app.use('/images', async (req, res, next) => {
    console.log(req.url)
    const imagePath = path.join(__dirname, req.url, "")
    console.log(imagePath)
    fs.stat(imagePath, (err, fileInfo) => {
        if (err) return res.status(404).send({message: "image not found"});
        if (fileInfo.isFile()) res.sendFile(imagePath);
        else next()
    })
})

app.use("/api/v1/user",userRoutes);
app.use("/api/v1/booking",booking)
app.use("/api/v1/workspace",workspaces)

module.exports = app;