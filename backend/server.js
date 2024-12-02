const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require('cors')
require('dotenv').config()
const cookieParser = require('cookie-parser')
const authRouter = require("./routes/auth/auth-routes")
const adminProductRoute = require("./routes/admin/products-routes")

mongoose.connect("mongodb+srv://hitesh:hitesh2024@cluster0.tdszj.mongodb.net/")
    .then(() => { console.log("MongoDB Connection Successful") })
    .catch((err) => { console.log("MongoDB connection fail", err) })

app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Pregma",
        "Expires"
    ],
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRouter)
app.use("/api/admin/products", adminProductRoute)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => { console.log(`server is running at port ${PORT}`) });
