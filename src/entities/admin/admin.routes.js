import express from 'express';




import { adminMiddleware } from '../../core/middlewares/authMiddleware.js';
import { createAdminController,deleteAdminController, getAdminControllerById, getAllAdminController, updateAdminController } from './admin.controller.js';
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

export default router;
