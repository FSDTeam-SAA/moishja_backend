import express from 'express';
import {
  submitContactMessage,
  getAllContactMessages,
  getContactMessageById,
  updateContactMessage,
  deleteContactMessage
} from './contact.controller.js';

const router = express.Router();

router.post('/', submitContactMessage);
router.get('/', getAllContactMessages);
router.get('/:id', getContactMessageById);
router.put('/:id', updateContactMessage);
router.delete('/:id', deleteContactMessage);

export default router;
