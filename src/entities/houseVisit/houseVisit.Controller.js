// controllers/houseVisitController.js
import { generateResponse } from '../../lib/responseFormate.js';
import * as houseVisitService from './houseVisit.service.js';

export const createHouseVisitController = async (req, res) => {
  try {
    const newVisit = await houseVisitService.requestHouseVisit(req.body, req.user._id);
    generateResponse(res, 201, true, 'House visit request created successfully', newVisit);
  } catch (error) {
    generateResponse(res, 500, false, error.message);
  }
};

export const getAllHouseVisitsController = async (req, res) => {
  try {
    const visits = await houseVisitService.getAllHouseVisits(req.body)
    generateResponse(res, 200, true, 'House visits fetched successfully', visits);
  } catch (error) {
    generateResponse(res, 500, false, error.message);
  }
};

export const getHouseVisitByIdController = async (req, res) => {
  try {
    const visit = await houseVisitService. getHouseVisitById(req.params.id);
    if (!visit) {
      return res.status(404).json({ message: 'House visit not found' });
    }
    generateResponse(res, 200, true, 'House visit fetched successfully', visit);
  } catch (error) {
    generateResponse(res, 500, false, error.message);
  }
};

export const updateHouseVisitController = async (req, res) => {
  try {
    const updatedVisit = await houseVisitService. updateHouseVisit(req.params.id, req.body);
    if (!updatedVisit) {
      return res.status(404).json({ message: 'House visit not found' });
    }
    generateResponse(res, 200, true, 'House visit updated successfully', updatedVisit);
  } catch (error) {
  generateResponse(res, 500, false, error.message);
  }
};

export const deleteHouseVisitController = async (req, res) => {
  try {
    const deleted = await houseVisitService. deleteHouseVisit(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'House visit not found' });
    }
    generateResponse(res, 200, true, 'House visit deleted successfully', deleted);
  } catch (error) {
    generateResponse(res, 500, false, error.message);
  }
};
