import express from "express";
import mongoose from " mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

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

// middleware

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 5000;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
