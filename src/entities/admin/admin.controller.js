
import { generateResponse } from '../../lib/responseFormate.js';
import * as serviceService from './admin.service.js';



export const createAdminController = async (req, res) => {

  console.log("From controller",req.body,req.files, req.user._id);

  try {
    const service = await serviceService.createService(req.body,req.files, req.user._id);
    // console.log(req.body, req.user._id);
    generateResponse(res, 201, true, 'Service created successfully',service);
  } catch (error) {
    generateResponse(res, error.status || 400, false, error.message);
  }
};


export const getAllAdminController = async (req, res) => {
  try {
    const filters = {
      category: req.query.category,
      adminId: req.query.adminId,
      search: req.query.search
    };
    
    const services = await serviceService.getAllServices(filters);
    generateResponse(res, 200, true, 'Services fetched successfully', services);
  } catch (error) {
    generateResponse(res, error.status || 500, false, error.message);
  }
};

export const getAdminControllerById = async (req, res) => {
  try {
    const service = await serviceService.getServiceById(req.params.id);
    generateResponse(res, 200, true, 'Service fetched successfully', service);
  } catch (error) {
    generateResponse(res, error.status || 404, false, error.message);
  }
};

export const updateAdminController = async (req, res) => {
  try {
    const service = await serviceService.updateService(
      req.params.id,
      req.body,
      req.user._id,
      req.user.role
    );
    generateResponse(res, 200, true, 'Service updated successfully', service);
  } catch (error) {
    generateResponse(res, error.status || 400, false, error.message);
  }
};

export const deleteAdminController = async (req, res) => {
  try {
    const result = await serviceService.deleteService(
      req.params.id,
      req.user._id,
      req.user.role
    );
    generateResponse(res, 200, true, result.message);
  } catch (error) {
    generateResponse(res, error.status || 400, false, error.message);
  }
};
