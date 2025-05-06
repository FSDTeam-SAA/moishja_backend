import { generateResponse } from "../../lib/responseFormate.js";
import { createFastRemovalRequestService, deleteFastRemovalRequestService, getAllFastRemovalRequestsService, getFastRemovalRequestByIdService, getFastRemovalRequestByUserIdService, updateFastRemovalRequestService } from "./fastRemoval.service.js";

export  const createFastRemovalRequest = async (req, res) => {
    try {
        const data = await createFastRemovalRequestService (req.body,req.user._id);
        generateResponse(res, 201, true, 'Fast removal request created successfully', data);
    }
    catch (error) {
        generateResponse(res, 500, false, error.message);
    }
}
export const getAllFastRemovalRequests = async (req, res) => {
    try {
        const data = await getAllFastRemovalRequestsService(req.body);
        generateResponse(res, 200, true, 'Fast removal requests fetched successfully', data);
    } catch (error) {
        generateResponse(res, 500, false, error.message);
    }
};
export const getFastRemovalRequestById = async (req, res) => {
    try {
        const data = await getFastRemovalRequestByIdService(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'Fast removal request not found' });
        }
        generateResponse(res, 200, true, 'Fast removal request fetched successfully', data);
    } catch (error) {
        generateResponse(res, 500, false, error.message);
    }
}
export const updateFastRemovalRequest = async (req, res) => {
    try {
        const data = await updateFastRemovalRequestService(req.params.id, req.body);
        if (!data) {
            return res.status(404).json({ message: 'Fast removal request not found' });
        }
        generateResponse(res, 200, true, 'Fast removal request updated successfully', data);
    } catch (error) {
    generateResponse(res, 500, false, error.message);
    }
};
export const deleteFastRemovalRequest = async (req, res) => { 
    try {
        const data = await deleteFastRemovalRequestService(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'Fast removal request not found' });
        }
        generateResponse(res, 200, true, 'Fast removal request deleted successfully', data);
    } catch (error) {
        generateResponse(res, 500, false, error.message);
    }
}
export const getFastRemovalRequestByUserId = async (req, res) => {
    try {
        const data = await getFastRemovalRequestByUserIdService(req.user._id);
        if (!data) {
            return res.status(404).json({ message: 'Fast removal request not found' });
        }
        generateResponse(res, 200, true, 'Fast removal request fetched successfully', data);
    } catch (error) {
        generateResponse(res, 500, false, error.message);
    }
}