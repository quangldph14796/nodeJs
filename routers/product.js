import { Router } from "express";
const router = Router();

const check = (req, res, next) => {
  const status = true;
  if (status) {
    next();
  } else {
    console.log("Anh có cái nịt");
  }
};
router.post("/api/products", check, (req, res, next) => {
  const products = [
    { id: 1, name: "Hảo Hán 1" },
    { id: 2, name: "Hảo Hán 2" },
  ];
  res.json(products);
});
router.post("/api/products", check, (req, res) => {
  console.log(req.body);
  const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
  ];
  products.push(req.body);
  res.json(products);
});
export default router;
