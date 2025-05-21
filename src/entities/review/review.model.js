import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        review: { type: Number, required: true, min: 0, max: 5 },
        comment: { type: String, default: '', trim: true },

        serviceType: {
            type: String,
            enum: ['removal-request', 'house-visit', 'fast-removal'],
            required: true
        },
        serviceId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },

        status: {
            type: String,
            enum: ['pending', 'approved'],
            default: 'pending',
        },
    },
    { timestamps: true }
);

const Review = mongoose.model('Review', reviewSchema);
export default Review;
