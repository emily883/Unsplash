import express from "express";
import { getAllImages, createImage, deleteImage } from "../controllers/imageController";

const router = express.Router();

// Get all Images
router.get("/list", getAllImages);

// Create a new Image
router.post("/image", createImage);

// Delete an Image
router.delete("/image/:id", deleteImage);

export default router;
