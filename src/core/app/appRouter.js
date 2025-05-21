import express from 'express';
import testRoutes from '../../entities/test/b.routes.js';
import authRoutes from '../../entities/auth/auth.routes.js';
import userRoutes from '../../entities/user/user.routes.js';
import adminRoutes from '../../entities/admin/admin.routes.js';
import contactRoutes from '../../entities/contact/contact.routes.js';
import fastRemovalRoutes from '../../entities/fastRemoval/fastRemoval.routes.js';
import houseVisitRoutes from '../../entities/houseVisit/houseVisit.routes.js'
import removalRequestRoutes from '../../entities/removalRequest/removalRequest.routes.js'
import newsletterSubscriptionRoutes from '../../entities/newsletterSubscription/newsletterSubscription.routes.js'
import reviewRoutes from '../../entities/review/review.routes.js'
import userServicesRoutes from '../../entities/userServices/userServices.routes.js'
import { getStats } from '../../lib/statController.js';



const router = express.Router();

// Define all your routes here
router.use('/v1/tests', testRoutes);
router.use('/v1/auth', authRoutes);
router.use('/v1/user', userRoutes);
router.use('/v1/admin', adminRoutes);
router.use('/v1/contact', contactRoutes)
router.use('/v1/houseVisit', houseVisitRoutes)
router.use('/v1/fastRemoval', fastRemovalRoutes)
router.use('/v1/removalRequest', removalRequestRoutes)
router.use('/v1/newsletterSubscription', newsletterSubscriptionRoutes)
router.use('/v1/review', reviewRoutes)
router.use('/v1/userServices', userServicesRoutes)
router.use('/v1/stats',getStats) 


export default router;
