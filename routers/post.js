import { Router } from "express";
import {
  createPost,
  listPost,
  readPost,
  removePost,
  updatePost,
} from "../controllers/post";
import { checkAuth } from "../middlewares/checkAuth";
const router = Router();
router.get("/posts", checkAuth, listPost);
router.get("/posts/:id", checkAuth, readPost);
router.post("/posts", checkAuth, createPost);
router.delete("/post/:id", checkAuth, removePost);
router.patch("/post/:id", checkAuth, updatePost);
