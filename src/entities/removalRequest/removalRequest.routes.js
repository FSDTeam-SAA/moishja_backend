import express from 'express';
import { createRemovalRequest } from './removalRequest.controller.js';

const router = express.Router();

router.post('/create', createRemovalRequest);

export default router;
