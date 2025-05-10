import RemovalRequest from '../entities/removalRequest/removalRequest.model.js';
import FastRemoval from '../entities/fastRemoval/fastRemoval.model.js';
import HouseVisit from '../entities/houseVisit/houseVisit.model.js';
import getAllMonthlyStats from '../lib/getAllMonthlyStats.js'; 

export const getStats = async (req, res) => {
    try {

        const [removalRequestStats, fastRemovalStats, houseVisitStats] = await Promise.all([
            getAllMonthlyStats(RemovalRequest),
            getAllMonthlyStats(FastRemoval),
            getAllMonthlyStats(HouseVisit)
        ]);

        
        res.status(200).json({
            status: true,
            message: 'Combined monthly completed stats',
            data: {
                fastRemovalStats,
                removalRequestStats,
                houseVisitStats
            }
        });
    } catch (error) {
        console.error('Error fetching stats:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
