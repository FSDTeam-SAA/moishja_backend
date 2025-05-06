import NewsletterSubscription from "./newsletterSubscription.model.js";

export const createNewsletterSubscriptionService = async (email) => {
    const existingSubscription = await NewsletterSubscription.findOne({ email });
    if (existingSubscription) throw new Error('Email already subscribed to the newsletter');
    
    const newsletterSubscription = new NewsletterSubscription({ email });

    await newsletterSubscription.save();
    return;
}