

// Usually only one about us document, so create if not exists or update

import AboutUs from "./about.model.js";

export const getAboutUsService = async () => {
  const about = await AboutUs.findOne();
  return about;
};

export const createOrUpdateAboutUsService = async (data) => {
  const about = await AboutUs.findOne();
  if (about) {
    // Update existing
    Object.assign(about, data);
    return about.save();
  }
  // Create new
  const newAbout = new AboutUs(data);
  return newAbout.save();
};
export const deleteAboutUsService = async (id) => {
    const about = await AboutUs.findByIdAndDelete(id);
    if (!about) throw new Error('About Us content not found');
    return about;
  };
  export const updateAboutUsService = async (id, data) => {
    const about = await AboutUs.findById(id);
    if (!about) throw new Error('About Us content not found');
    Object.assign(about, data);
    return await about.save();
  };