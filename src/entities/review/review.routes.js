import express from "express";
import { createReview, getAllReviews } from "./review.controller.js";
import { userMiddleware, verifyToken } from "../../core/middlewares/authMiddleware.js";

const router = express.Router();

router.post("/create", verifyToken, userMiddleware, createReview);
router.get("/get-all-reviews", getAllReviews);


export default router;