import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        fullname: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true, lowercase: true },
        review: { type: Number, required: true, min: 0, max: 5 },
        comment: { type: String, default: '', trim: true },
    },
    { timestamps: true }
);

const Review = mongoose.model('Review', reviewSchema);
export default Review;
