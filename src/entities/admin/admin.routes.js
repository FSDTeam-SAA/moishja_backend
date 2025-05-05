import express from 'express';




import { adminMiddleware } from '../../core/middlewares/authMiddleware.js';
import { createAdminController,deleteAdminController, getAdminControllerById, getAllAdminController, updateAdminController } from './admin.controller.js';
import { multerUpload } from '../../core/middlewares/multer.js';
import { createService, deleteService, getAllServices, getServiceById, updateService } from './admin.controller.js';
import { multerUpload } from '../../core/middlewares/multer.js';

const router = express.Router();

// All routes require admin or super admin authentication
router.use(adminMiddleware);

// Routes
router.post('/create',multerUpload([{ name: "adminImage", maxCount: 1 }]), createAdminController);
router.get('/', getAllAdminController);
router.get('/:id', getAdminControllerById);
router.put('/:id', updateAdminController);
router.delete('/:id', deleteAdminController);
router.post('/create',multerUpload([{ name: "photos", maxCount: 5 },]), createService);
router.get('/', getAllServices);
router.get('/:id', getServiceById);
router.put('/:id', updateService);
router.delete('/:id', deleteService);

export default router;
