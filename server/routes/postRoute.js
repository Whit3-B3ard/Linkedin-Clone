import express from "express";
import {
  addPost,
  getAll,
  handleDelete,
  handleLike,
} from "../controllers/postController.js";
import upload from "../middlewares/mutlerLocalstorage.js";

const postRoutes = express.Router();

postRoutes.post("/add", upload.single("postImage"), addPost);
postRoutes.get("/get", getAll);
postRoutes.put("/like/:postId/:userId", handleLike);
postRoutes.delete("/delete/:postId", handleDelete);

export default postRoutes;
