import { generateResponse } from "../../lib/responseFormate.js";
import { createReviewService, getAllReviewsService } from "./review.service.js";

export const createReview = async (req, res, next) => {
    const userId = req.user._id;
    req.body.userId = userId;

    try {
        await createReviewService(req.body);
        generateResponse(res, 201, true, 'Review created successfully', null);
    }

    catch (error) {
        next(error);
    }
}

export const getAllReviews = async (req, res, next) => {
    try {
        const data = await getAllReviewsService();
        generateResponse(res, 200, true, 'Reviews fetched successfully', data);
    }

    catch (error) {
        next(error);
    }
}