import express from "express";
import cors from "cors";
import morgan from "morgan";
import productRoute from "../routers/product.js";
const app = express();
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(productRoute);
const PORT = 3001;
app.listen(PORT, () => {
  console.log("Server is running");
});
