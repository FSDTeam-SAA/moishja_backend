import {
  createContactMessageService,
  getAllContactMessagesService,
  getContactMessageByIdService,
  updateContactMessageService,
  deleteContactMessageService,
} from './contact.service.js';

import { generateResponse } from '../../lib/responseFormate.js';

// Create / Submit a new contact message
export const submitContactMessage = async (req, res) => {
  try {
    const saved = await createContactMessageService(req.body);
    generateResponse(res, 201, true, 'Message received successfully', saved);
  } catch (error) {
    generateResponse(res, 400, false, 'Failed to submit message', error.message);
  }
};

// Get all contact messages
export const getAllContactMessages = async (req, res) => {
  try {
    const messages = await getAllContactMessagesService();
    generateResponse(res, 200, true, 'Messages fetched successfully', messages);
  } catch (error) {
    generateResponse(res, 500, false, 'Failed to fetch messages', error.message);
  }
};

// Get a single contact message by ID
export const getContactMessageById = async (req, res) => {
  try {
    const message = await getContactMessageByIdService(req.params.id);
    if (!message) {
      return generateResponse(res, 404, false, 'Message not found');
    }
    generateResponse(res, 200, true, 'Message fetched successfully', message);
  } catch (error) {
    generateResponse(res, 400, false, 'Failed to fetch message', error.message);
  }
};

// Update a contact message by ID
export const updateContactMessage = async (req, res) => {
  try {
    const updated = await updateContactMessageService(req.params.id, req.body);
    if (!updated) {
      return generateResponse(res, 404, false, 'Message not found');
    }
    generateResponse(res, 200, true, 'Message updated successfully', updated);
  } catch (error) {
    generateResponse(res, 400, false, 'Failed to update message', error.message);
  }
};

// Delete a contact message by ID
export const deleteContactMessage = async (req, res) => {
  try {
    const deleted = await deleteContactMessageService(req.params.id);
    if (!deleted) {
      return generateResponse(res, 404, false, 'Message not found');
    }
    generateResponse(res, 200, true, 'Message deleted successfully', deleted);
  } catch (error) {
    generateResponse(res, 400, false, 'Failed to delete message', error.message);
  }
};
