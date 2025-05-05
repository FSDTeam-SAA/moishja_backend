import Service from "./services.model.js";



export const createService = async (serviceData, adminId) => {
  try {
    const service = new Service({
      ...serviceData,
      adminId
    });
    console.log(serviceData, adminId);
    await service.save();
    return service;
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errorMessage = Object.values(error.errors).map(err => err.message).join(', ');
      const err = new Error(errorMessage);
      err.status = 400;
      throw err;
    }
    throw error;
  }
};

export const getAllServices = async (filters = {}) => {
  try {
    const query = { isActive: true };

    // Apply filters
    if (filters.category) {
      query.category = filters.category;
    }
    if (filters.adminId) {
      query.adminId = filters.adminId;
    }
    if (filters.search) {
      query.name = { $regex: filters.search, $options: 'i' };
    }

    const services = await Service.find(query)
      .populate('adminId', 'fullName email')
      .sort({ createdAt: -1 });

    return services;
  } catch (error) {
    const err = new Error('Failed to fetch services');
    err.status = 500;
    throw err;
  }
};

export const getServiceById = async (serviceId) => {
  try {
    const service = await Service.findOne({ _id: serviceId, isActive: true })
      .populate('adminId', 'fullName email');

    if (!service) {
      const error = new Error('Service not found');
      error.status = 404;
      throw error;
    }
    return service;
  } catch (error) {
    if (error.status) throw error;
    const err = new Error('Failed to fetch service');
    err.status = 500;
    throw err;
  }
};

export const updateService = async (serviceId, updateData, adminId, adminRole) => {
  try {
    const service = await Service.findById(serviceId);
    if (!service) {
      const error = new Error('Service not found');
      error.status = 404;
      throw error;
    }

    if (service.adminId.toString() !== adminId.toString() && adminRole !== 'SUPER_ADMIN') {
      const error = new Error('Not authorized to update this service');
      error.status = 403;
      throw error;
    }

    // Only update allowed fields
    const allowedUpdates = ['name', 'description', 'price', 'duration', 'category', 'photos', 'isActive'];
    const updates = Object.keys(updateData)
      .filter(key => allowedUpdates.includes(key))
      .reduce((obj, key) => {
        obj[key] = updateData[key];
        return obj;
      }, {});

    Object.assign(service, updates);
    await service.save();
    return service;
  } catch (error) {
    if (error.status) throw error;
    if (error.name === 'ValidationError') {
      const errorMessage = Object.values(error.errors).map(err => err.message).join(', ');
      const err = new Error(errorMessage);
      err.status = 400;
      throw err;
    }
    const err = new Error('Failed to update service');
    err.status = 500;
    throw err;
  }
};

export const deleteService = async (serviceId, adminId, adminRole) => {
  try {
    const service = await Service.findById(serviceId);
    if (!service) {
      const error = new Error('Service not found');
      error.status = 404;
      throw error;
    }

    if (service.adminId.toString() !== adminId.toString() && adminRole !== 'SUPER_ADMIN') {
      const error = new Error('Not authorized to delete this service');
      error.status = 403;
      throw error;
    }

    // Soft delete by setting isActive to false
    service.isActive = false;
    await service.save();

    return { message: 'Service deleted successfully' };
  } catch (error) {
    if (error.status) throw error;
    const err = new Error('Failed to delete service');
    err.status = 500;
    throw err;
  }
};
