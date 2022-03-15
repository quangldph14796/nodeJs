import User from "../models/user";
export const signin = async (req, res) => {
  try {
    const user = await new User(req.body).save();
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: "sai tài khoản hoặc mật khẩu" });
  }
};
