import Product from "../models/product";
export const read = async (req, res) => {
  const filter = { _id: req.params.id };
  try {
    const product = await Product.findOne(filter);
    res.json(product);
  } catch (error) {
    res.status(400).json({
      message: "Lỗi không tìm được sản phẩm",
    });
  }
};
//API thêm sản phẩm
export const create = async (req, res) => {
  try {
    const product = await new Product(req.body).save();
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: "hong bé ơi" });
  }
};
//API list sản phẩm
export const list = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(400).json({
      message: "Lỗi không tìm được sản phẩm",
    });
  }
};
export const remove = async (req, res) => {
  const condition = { _id: req.params.id };
  try {
    const product = await Product.findOneAndDelete(condition);
    res.json({
      message: "Done",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      message: "Lỗi không tìm được sản phẩm",
    });
  }
};
export const update = async (req, res) => {
  const condition = { _id: req.params.id };
  const doc = req.body;
  const options = { new: true };
  try {
    const product = await Product.findOneAndUpdate(condition, doc, options);
    res.json(product);
  } catch (error) {
    res.status(400).json({
      message: "Lỗi không tìm được sản phẩm",
    });
  }
};
