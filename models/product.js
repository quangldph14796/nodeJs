import mongoose, { Schema } from "mongoose";
const productSchema = new Schema(
  {
    name: {
      type: "string",
      minLength: 5,
      required: true,
    },
    price: {
      type: "number",
      required: true,
    },
  },
  { timestamp: true }
);
export default mongoose.model("Product", productSchema);
