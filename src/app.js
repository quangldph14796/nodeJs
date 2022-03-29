import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';

import productRoute from '../routes/product';
import categoryRoute from '../routes/category';
import authRoute from '../routes/auth';
const app = express();

// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json())

// route
app.use("/api",productRoute);
app.use("/api",categoryRoute);
app.use("/api",authRoute);
// connnect database
mongoose.connect('mongodb://localhost:27017/we16309')
    .then(() => console.log("Kết nối db thành công"))
    .catch((error) => console.log(error));
    
// connection
const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
})