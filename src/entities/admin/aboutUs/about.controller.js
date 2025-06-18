import {
    getAboutUsService,
    createOrUpdateAboutUsService,
    updateAboutUsService,
    deleteAboutUsService
  } from './about.service.js';
  import { generateResponse } from '../../../lib/responseFormate.js';
  
  
  export const getAboutUs = async (req, res) => {
    try {
      const about = await getAboutUsService();
      if (!about) {
        return generateResponse(res, 404, false, 'About Us content not found');
      }
      generateResponse(res, 200, true, 'About Us content fetched', about);
    } catch (error) {
      generateResponse(res, 500, false, 'Failed to fetch About Us content', error.message);
    }
  };
  
  export const createOrUpdateAboutUs = async (req, res) => {
    try {
      const updatedAbout = await createOrUpdateAboutUsService(req.body);
      generateResponse(res, 200, true, 'About Us content saved successfully', updatedAbout);
    } catch (error) {
      generateResponse(res, 400, false, 'Failed to save About Us content', error.message);
    }
  };
  export const deleteAboutUs = async (req, res) => {
    try {
      const id = req.params.id;
      const deleted = await deleteAboutUsService(id);
      generateResponse(res, 200, true, 'About Us content deleted successfully', deleted);
    } catch (error) {
      generateResponse(res, 400, false, 'Failed to delete About Us content', error.message);
    }
  };
  export const updateAboutUs = async (req, res) => {
    try {
      const id = req.params.id;
      const updated = await updateAboutUsService(id, req.body);
      generateResponse(res, 200, true, 'About Us content updated successfully', updated);
    } catch (error) {
      generateResponse(res, 400, false, 'Failed to update About Us content', error.message);
    }
  };