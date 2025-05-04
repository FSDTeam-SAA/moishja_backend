import { generateResponse } from '../../lib/responseFormate.js';
import {
  createService,
  deleteService,
  getAllServices,
  getServiceById,
  updateService
} from './services.service.js';

import { cloudinaryUpload } from '../../lib/cloudinaryUpload.js';

export const createServiceController = async (req, res) => {
  try {
    const { name, description, photos, category, price } = req.body;
    const adminId = req.user._id || req.user.id;

    const uploadedPhotos = [];

    if (req.files && req.files.photos) {
      for (const file of req.files.photos) {
        const result = await cloudinaryUpload(file.path, undefined, 'services');
        if (typeof result === 'string') {
          throw new Error('Cloudinary upload failed');
        }
        uploadedPhotos.push(result.secure_url);
      }
    }

    const newService = await createService({
      name,
      description,
      photos: uploadedPhotos,
      category,
      price,
      adminId
    });
    generateResponse(
      res,
      200,
      true,
      'Service created successfully',
      newService
    );
  } catch (error) {
    generateResponse(res, 400, false, 'Failed creating service', error.message);
  }
};

export const updateServiceController = async (req, res) => {
  try {
    const { serviceId } = req.params;
    const { name, description, photos, category, price } = req.body;
    const updatedService = await updateService(serviceId, {
      name,
      description,
      photos,
      category,
      price
    });
    generateResponse(
      res,
      200,
      true,
      'Service updated successfully',
      updatedService
    );
  } catch (error) {
    generateResponse(res, 400, false, 'Failed updating service', error.message);
  }
};

// Get all services controller
export const getAllServicesController = async (req, res) => {
  try {
    const services = await getAllServices();
    generateResponse(res, 200, true, 'Services fetched successfully', services);
  } catch (error) {
    generateResponse(
      res,
      400,
      false,
      'Failed to fetch services',
      error.message
    );
  }
};

export const getServiceByIdController = async (req, res) => {
  try {
    const { serviceId } = req.params;
    const service = await getServiceById(serviceId);
    if (!service) {
      return generateResponse(res, 404, false, 'Service not found');
    }
    generateResponse(res, 200, true, 'Service fetched successfully', service);
  } catch (error) {
    generateResponse(res, 400, false, 'Failed to fetch service', error.message);
  }
};
export const deleteServiceController = async (req, res) => {
  try {
    const { serviceId } = req.params;

    const deletedService = await deleteService(serviceId);
    generateResponse(
      res,
      200,
      true,
      'Service deleted successfully',
      deletedService
    );
  } catch (error) {
    generateResponse(res, 400, false, 'Service deletion failed', error.message);
  }
};
