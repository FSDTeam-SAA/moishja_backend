

import express from "express";
import { createServiceController, deleteServiceController, getAllServicesController, getServiceByIdController, updateServiceController } from "./services.controller.js";
import {adminMiddleware} from "../../core/middlewares/authMiddleware.js";
import { multerUpload } from "../../core/middlewares/multer.js";
const router = express.Router();

router.post('/addService',adminMiddleware,multerUpload([
    
    { name: 'photos', maxCount: 5 },
  ]),createServiceController)
router.get('/getAllServices',getAllServicesController)
router.put('/updateService/:serviceId',adminMiddleware,updateServiceController)
router.delete('/deleteService/:serviceId',adminMiddleware,deleteServiceController)
router.get('/getService/:serviceId',getServiceByIdController)

export default router