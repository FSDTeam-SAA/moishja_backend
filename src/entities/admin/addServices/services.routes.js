import express from 'express';
import { adminSuperAdminMiddleware } from '../../../core/middlewares/authMiddleware.js';
import {
  createService,
  getServices,
  getServiceById,
  updateService,
  deleteService
} from './services.controller.js';

const router = express.Router();

// All routes require admin or super admin authentication
router.use(adminSuperAdminMiddleware);

// Routes
router.post('/create', createService);
router.get('/', getServices);
router.get('/:id', getServiceById);
router.put('/:id', updateService);
router.delete('/:id', deleteService);

export default router;
