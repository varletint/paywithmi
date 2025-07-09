import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";

// Routes connection

import itemRoutes from "./routes/item.route.js";
import authRoutes from "./routes/auth.route.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

dotenv.config();

// database connection i.e mongoDB connection

mongoose
  .connect(process.env.MONGO_KEYS)
  .then(() => {
    console.log("mongoDB database connected");
  })
  .catch((err) => {
    console.log(err);
  });

// connect to the server
app.listen(3000, () => {
  console.log("server running at 3000");
});

app.use("/api/item", itemRoutes);
app.use("/api/auth", authRoutes);

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

// middleware

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
