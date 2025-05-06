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
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    try {
        const {data, pagination} = await getAllReviewsService(page, limit, skip);
        return res.status(200).json({
            success: true,
            data,
            pagination
        });
    }

    catch (error) {
        next(error);
    }
}