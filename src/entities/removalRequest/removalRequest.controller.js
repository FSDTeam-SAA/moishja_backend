import { generateResponse } from "../../lib/responseFormate.js";
import { createRemovalRequestService, deleteRemovalRequestService, getAllRemovalRequestsService, getRemovalRequestByIdService, getRemovalRequestByUserIdService, updateRemovalRequestService } from "./removalRequest.service.js";

export const createRemovalRequest = async (req, res, next) => {
    const { _id: userId } = req.user
    req.body.userId = userId;
    try {
        await createRemovalRequestService(req.body);
        generateResponse(res, 201, true, 'Removal request created successfully', null);
    }

    catch (error) {
        next(error);
    }
};

export const getAllRemovalRequests = async (req, res, next) => {
    try {
        const removalRequests = await getAllRemovalRequestsService(req.body);
        if (!removalRequests) {
            return generateResponse(res, 404, false, 'No removal requests found', null);
        }
        generateResponse(res, 200, true, 'Removal requests fetched successfully', removalRequests);
    } catch (error) {
        next(error);
    }
}
export const getRemovalRequestById = async (req, res, next) => {
    try {
        const removalRequest = await getRemovalRequestByIdService(req.params.id);
        if (!removalRequest) {
            return generateResponse(res, 404, false, 'Removal request not found', null);
        }
        generateResponse(res, 200, true, 'Removal request fetched successfully', removalRequest);
    } catch (error) {
        next(error);
    }
}
export const updateRemovalRequest = async (req, res, next) => {
    try {
        const removalRequest = await updateRemovalRequestService(req.params.id, req.body);
        if (!removalRequest) {
            return generateResponse(res, 404, false, 'Removal request not found', null);
        }
        generateResponse(res, 200, true, 'Removal request updated successfully', removalRequest);
    } catch (error) {
        next(error);
    }
};
export const deleteRemovalRequest = async (req, res, next) => {
    try {
        const removalRequest = await deleteRemovalRequestService(req.params.id);
        if (!removalRequest) {
            return generateResponse(res, 404, false, 'Removal request not found', null);
        }
        generateResponse(res, 200, true, 'Removal request deleted successfully', removalRequest);
    } catch (error) {
        next(error);
    }
}
export const getRemovalRequestByUserId = async (req, res, next) => {
    try {
        const removalRequest = await getRemovalRequestByUserIdService(req.user._id);
        if (!removalRequest) {
            return generateResponse(res, 404, false, 'Removal request not found', null);
        }
        generateResponse(res, 200, true, 'Removal request fetched successfully', removalRequest);
    } catch (error) {
        next(error);
    }
}
