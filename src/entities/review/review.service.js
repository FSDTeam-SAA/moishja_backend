import Review from "./review.model.js";

export const createReviewService = async (body) => {

    const review = new Review(body);

    await review.save();
    return
}

export const getAllReviewsService = async () => {

    const uniqueReviews = await Review.aggregate([
        {
            $sort: { createdAt: -1 } // Sort reviews so the latest comes first
        },
        {
            $group: {
                _id: "$userId",
                review: { $first: "$review" },
                comment: { $first: "$comment" },
                serviceType: { $first: "$serviceType" },
                serviceId: { $first: "$serviceId" },
                createdAt: { $first: "$createdAt" },
            }
        },
        {
            $lookup: {
                from: "users",
                localField: "_id",
                foreignField: "_id",
                as: "user"
            }
        },
        {
            $unwind: "$user"
        },
        {
            $project: {
                _id: 0,
                userId: "$_id",
                review: 1,
                comment: 1,
                serviceType: 1,
                serviceId: 1,
                createdAt: 1,
                user: {
                    _id: "$user._id",
                    name: "$user.name",
                    email: "$user.email"
                }
            }
        }
    ]);

    return uniqueReviews;
}