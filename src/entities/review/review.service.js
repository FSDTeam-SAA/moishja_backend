import Review from "./review.model.js";

export const createReviewService = async (body) => {

    const review = new Review(body);

    await review.save();
    return
}

export const getAllReviewsService = async (page, limit, skip) => {

    const uniqueReviews = await Review.aggregate([
        {
            $sort: { createdAt: -1 } // Sort reviews so the latest comes first
        },
        {
            $group: {
                _id: "$userId",
                review: { $first: "$review" },
                comment: { $first: "$comment" },
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
                review: 1,
                comment: 1,
                createdAt: 1,
                user: {
                    _id: "$user._id",
                    firstName: "$user.firstName",
                    lastName: "$user.lastName",
                    profileImage: "$user.profileImage",
                }
            }
        }
    ]);

    return {
        data: uniqueReviews.slice(skip, skip + limit),
        pagination: {
            currentPage: page,
            totalPages: Math.ceil(uniqueReviews.length / limit),
            totalItems: uniqueReviews.length,
            itemsPerPage: limit
        }
    }
}