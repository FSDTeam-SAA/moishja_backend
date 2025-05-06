import RemovalRequest from '../removalRequest/removalRequest.model.js';
import HouseVisit from '../houseVisit/houseVisit.model.js';
import FastRemoval from '../fastRemoval/fastRemoval.model.js';

export const getAllUserServicesService = async (userId) => {
    const [removalRequests, houseVisits, fastRemovals] = await Promise.all([
        RemovalRequest.find({ userId }),
        HouseVisit.find({ userId }),
        FastRemoval.find({ userId }),
    ]);

    // Format each service type
    const formattedFastRemovals = fastRemovals.map(item => ({
        serviceType: 'Free & Fast Removal',
        status: item.status,
        date: item.date || item.createdAt,
        address: item.address,
        id: item._id,
    }));

    const formattedHouseVisits = houseVisits.map(item => ({
        serviceType: 'House Visit',
        status: item.status,
        date: item.visitDate || item.createdAt,
        address: item.address,
        id: item._id,
    }));

    const formattedRemovalRequests = removalRequests.map(item => ({
        serviceType: 'Removal Request',
        status: item.status,
        date: item.requestedDate || item.createdAt,
        address: item.pickupAddress,
        id: item._id,
    }));

    // Combine and sort by date (latest first)
    const mergedServices = [
        ...formattedFastRemovals,
        ...formattedHouseVisits,
        ...formattedRemovalRequests,
    ].sort((a, b) => new Date(b.date) - new Date(a.date));

    return mergedServices;
}