import dotenv from "dotenv";
dotenv.config();

import itemRoutes from "./routes/itemRoutes.js";
import RdataRoutes from "./routes/RdataRoutes.js";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/items", itemRoutes);
app.use("/rdata", RdataRoutes);

console.log("MONGO_URL =", process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("---MongoDB connected---");
}).catch(err => {
  console.error("Fail to connect..");
});


app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});