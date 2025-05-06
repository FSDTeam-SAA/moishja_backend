import { generateResponse } from "../../lib/responseFormate.js";
import { getAllUserServicesService } from "./userServices.service.js";

export const getAllUserServices = async (req, res, next) => {
    const userId = req.user._id;
    try {
        const data = await getAllUserServicesService(userId);
        generateResponse(res, 200, true, 'User services fetched successfully', data);
    }

    catch (error) {
        next(error);
    }
}