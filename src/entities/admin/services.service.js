import Service from './services.model.js';




//create Service by admin
export const createService = async ({
  name,
  description,
  photos,
  category,
  price,
  adminId
}) => {
  try {
    const service = new Service({
      name,
      description,
      photos,
      category,
      price,
      adminId
    });
    const saveService = await service.save();
    return saveService;
  } catch (err) {
    console.log(err);
    throw new Error('Error creating service');
  }
};

//update Service
export const updateService = async (
  serviceId,
  { name, description, photos, category, price }
) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(
      serviceId,
      { name, description, photos, category, price },
      { new: true, runValidators: true }
    );
    if (!updatedService) {
      throw new Error('Service not found');
    }
    return updatedService;
  } catch (err) {
    console.log(err);
    throw new Error('Error updating service: ' + err.message); // Use 'err' instead of 'error'
  }
};

// delete service

export const deleteService = async (serviceId)=>{
    try{
        const deletedService = await Service.findByIdAndDelete(serviceId);
        if(!deletedService){
            throw new Error('Service not found');
        }
        return deletedService;  
    }catch(err){
        console.log(err);
        throw new Error('Error deleting service: ' + err.message); 
    }
}

// get all services

export const getAllServices = async () => {
    try{
        const services =await Service.find().populate('adminId','fullName email phone');
        return services;    
    }catch(err){
        console.log(err);
        throw new Error('Error fetching services: ' + err.message); 
    }
}
export const getServiceById = async (serviceId) => {
    try{
        const service = await Service.findById(serviceId).populate('adminId','fullName email phone');
        if(!service){
            throw new Error('Service not found');
        }
        return service;
    }catch(err){
        console.log(err);
        throw new Error('Error fetching service: ' + err.message); 
    }
}