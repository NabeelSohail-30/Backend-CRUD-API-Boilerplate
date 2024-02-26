// Importing required modules
import express from "express";
import mongoose from "mongoose";
import Product from "./models/product.model.js";
import productRoute from "./routes/product.route.js";

// Creating an Express application
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoute);

// Default route
app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

// Connecting to MongoDB
const mongodbUri = "mongodburi"; // Replace with your actual MongoDB URI
mongoose
  .connect(mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to database!");
    // Starting the server
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.error("Connection failed!", error.message);
  });
