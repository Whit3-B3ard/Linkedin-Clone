import express from "express";
import { } from "../Controllers/authController.js";
import { fetchLoggedUser, handleRegister, handleSignIn } from "../Controllers/authController.js";
import { uploadImage } from "../controllers/cloudinaryController.js";
import auth from "../middlewares/userAuth.js";

const userRoutes = express.Router();

userRoutes.post("/register", handleRegister )
userRoutes.post("/signin",   handleSignIn );
userRoutes.post("/upload-image", auth, uploadImage); 
userRoutes.get("/loggeduser", auth, fetchLoggedUser)

export default userRoutes;

