import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
  username: {
    type: String,
    minLength: 5,
    // match: [
    //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    //   "Please fill a valid email address",
    // ],
  },
  password: {
    type: String,
    // lowercase: true,
    minLength: 6,
    maxLength: 30,
  },
});
export default mongoose.model("User", userSchema);
