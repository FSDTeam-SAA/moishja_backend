import express from 'express';




import { adminMiddleware } from '../../core/middlewares/authMiddleware.js';
import { createService, deleteService, getAllServices, getServiceById, updateService } from './admin.service.js';

const router = express.Router();

// All routes require admin or super admin authentication
router.use(adminMiddleware);

// Routes
router.post('/create', createService);
router.get('/', getAllServices);
router.get('/:id', getServiceById);
router.put('/:id', updateService);
router.delete('/:id', deleteService);

export default router;
