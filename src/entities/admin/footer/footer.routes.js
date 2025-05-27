import express from 'express';

import { create, getAll, getById, remove, update } from './footer.controller.js';
import { adminMiddleware, verifyToken } from '../../../core/middlewares/authMiddleware.js';

const router = express.Router();


// Connect to MongoDB before this
router.post('/create',verifyToken, adminMiddleware, create);
router.get('/',getAll);
router.get('/:id',verifyToken, adminMiddleware,getById );
router.put('/update/:id',verifyToken, adminMiddleware, update);
router.delete('/:id',verifyToken, adminMiddleware, remove);

export default router;
