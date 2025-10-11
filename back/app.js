// import necessary modules
import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import router from "./routes/movie.routes.js";
import cors from "cors";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

// Enable CORS for all routes
app.use(cors());

// Load environment variables from .env file
dotenv.config();

console.log("MONGO_URI:", process.env.MONGO_URI);

connectDB();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
app.use("/films", router);

// Error handling middleware
app.use(errorHandler);

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Server
app.listen(5001, () => {
  console.log("Server running at http://localhost:5001/");
});
