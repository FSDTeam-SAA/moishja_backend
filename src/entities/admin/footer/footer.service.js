import SocialLink from './footer.model.js';

// Create a social link
export const createSocialLink = async (data) => {
  return await SocialLink.create(data);
};

// Get all social links
export const getAllSocialLinks = async () => {
  return await SocialLink.find();
};

// Get social link by ID
export const getSocialLinkById = async (id) => {
  return await SocialLink.findById(id);
};

// Update social link
export const updateSocialLink = async (id, data) => {
  return await SocialLink.findByIdAndUpdate(id, data, { new: true });
};

// Delete social link
export const deleteSocialLink = async (id) => {
  return await SocialLink.findByIdAndDelete(id);
};
