import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";

//route
import productRoute from "../routers/product";

const app = express();
// middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
//route
app.use("/api", productRoute);
//connect db
mongoose
  .connect("mongodb://localhost:27017/we16309")
  .then(() => console.log("Connected successfully"))
  .catch((error) => console.log("error"));
//connection
const PORT = 4040;
app.listen(PORT, () => {
  console.log("Server is running port", PORT);
});
