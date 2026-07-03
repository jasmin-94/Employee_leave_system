import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors"
import authRoutes from "./routes/authRoutes.js"
import leaveRoutes from "./routes/leaveRoutes.js"

dotenv.config()

console.log("MONGO_URI:", process.env.MONGO_URI);
console.log("Current directory:", process.cwd());

connectDB()

const app = express()

app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoutes);
app.use("/api/leaves", leaveRoutes);

app.get("/",(req, res)=>{
    res.send("Employee Leave Management API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server running on port${PORT}`)
});