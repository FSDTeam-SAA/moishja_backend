import { generateResponse } from "../../lib/responseFormate.js";
import { createNewsletterSubscriptionService } from "./newsletterSubscription.service.js";

export const createNewsletterSubscription = async (req, res, next) => {
    const { email } = req.body;
    try {
        await createNewsletterSubscriptionService(email);
        generateResponse(res, 201, true, 'Newsletter subscription created successfully', null);
    }

    catch (error) {
        if (error.message === 'Email already subscribed to the newsletter') {
            generateResponse(res, 400, false, error.message, null);
        }

        else {
            next(error);
        }
    }
}