import ContactMessage from './contact.model.js';

/**
 * Create a new contact message
 */
export const createContactMessageService = async (data) => {
  const contact = new ContactMessage(data);
  return await contact.save();
};

/**
 * Get all contact messages
 */
export const getAllContactMessagesService = async () => {
  return await ContactMessage.find().sort({ createdAt: -1 });
};

/**
 * Get a single contact message by ID
 */
export const getContactMessageByIdService = async (id) => {
  return await ContactMessage.findById(id);
};

/**
 * Update a contact message by ID
 */
export const updateContactMessageService = async (id, updateData) => {
  return await ContactMessage.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true
  });
};

/**
 * Delete a contact message by ID
 */
export const deleteContactMessageService = async (id) => {
  return await ContactMessage.findByIdAndDelete(id);
};
