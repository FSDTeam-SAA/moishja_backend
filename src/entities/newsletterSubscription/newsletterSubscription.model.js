import mongoose from "mongoose";

const NewsletterSubscriptionSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    subscribedAt: {
        type: Date,
        default: Date.now,
    },
});

const NewsletterSubscription = mongoose.model(
    'NewsletterSubscription',
    NewsletterSubscriptionSchema
);

export default NewsletterSubscription;