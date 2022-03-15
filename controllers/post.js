import mongoose from "mongoose";
const Post = mongoose.model("Post", { name: string });
export const listPost = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(400).json({
      message: "Lỗi không tìm được bài viết",
    });
  }
};
export const readPost = (req, res) => {
  res.json(posts.find((itemPost) => itemPost.id === +req.params.id));
};
export const createPost = async (req, res) => {
  try {
    const post = await new Post(req.body).save();
    res.json(post);
  } catch (error) {
    res.status(400).json({ message: "Có cái nịt" });
  }
};
export const removePost = (req, res) => {
  res.json(posts.filter((itemPost) => itemPost.id === +req.params.id));
};
export const updatePost = (req, res) => {
  res.json(
    posts.map((itemPost) => (itemPost.id == req.params.id ? req.body : item))
  );
};
