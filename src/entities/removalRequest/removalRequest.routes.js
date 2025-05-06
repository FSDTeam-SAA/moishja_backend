import express from 'express';
import { createRemovalRequest } from './removalRequest.controller.js';
import { userMiddleware, verifyToken } from '../../core/middlewares/authMiddleware.js';

const router = express.Router();

router.post('/create', verifyToken, userMiddleware, createRemovalRequest);

export default router;
