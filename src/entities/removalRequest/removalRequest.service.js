import RemovalRequest from "./removalRequest.model.js";

export const createRemovalRequestService = async (body) => {
    const removalRequest = new RemovalRequest(body);

    await removalRequest.save();
    return removalRequest;
}