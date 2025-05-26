import express from 'express';
import {
    getAboutUs,
   
    updateAboutUs,
    deleteAboutUs,
    createOrUpdateAboutUs
} from './about.controller.js';


const router = express.Router();

router.get('/', getAboutUs);
router.post('/create', createOrUpdateAboutUs);
router.put('/:id', updateAboutUs);
router.delete('/:id', deleteAboutUs);

export default router;
