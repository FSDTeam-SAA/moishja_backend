import { generateResponse } from "../../lib/responseFormate.js";
import { createRemovalRequestService } from "./removalRequest.service.js";

export const createRemovalRequest = async (req, res, next) => {
    const { _id: userId } = req.user
    req.body.userId = userId;
    try {
        const data = await createRemovalRequestService(req.body);
        generateResponse(res, 201, true, 'Removal request created successfully', data);
    }

    catch (error) {
        next(error);
    }
};