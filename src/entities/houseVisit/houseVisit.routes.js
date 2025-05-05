import express from 'express';
import { createHouseVisitController, deleteHouseVisitController, getAllHouseVisitsController, getHouseVisitByIdController, updateHouseVisitController } from './houseVisit.Controller.js';
import { userMiddleware } from '../../core/middlewares/authMiddleware.js';

const router = express.Router();

router.use(userMiddleware)
router.post('/create',createHouseVisitController)
router.get('/',getAllHouseVisitsController)
router.get('/:id',getHouseVisitByIdController)
router.put('/:id',updateHouseVisitController)
router.delete('/:id',deleteHouseVisitController)

export default router;