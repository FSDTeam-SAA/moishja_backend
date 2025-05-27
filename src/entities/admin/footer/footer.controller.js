import * as socialLinkService from './footer.service.js';
import { generateResponse } from '../../../lib/responseFormate.js';

export const getAll = async (req, res) => {
  try {
    const links = await socialLinkService.getAllSocialLinks();
    generateResponse(res, 200, true, 'Social links fetched successfully', links);
  } catch (err) {
    generateResponse(res, 500, false, 'Failed to fetch social links', err.message);
  }
};

export const getById = async (req, res) => {
  try {
    const link = await socialLinkService.getSocialLinkById(req.params.id);
    if (!link) return generateResponse(res, 404, false, 'Social link not found');
    generateResponse(res, 200, true, 'Social link fetched successfully', link);
  } catch (err) {
    generateResponse(res, 500, false, 'Failed to fetch social link', err.message);
  }
};

export const create = async (req, res) => {
  try {
    const newLink = await socialLinkService.createSocialLink(req.body);
    generateResponse(res, 201, true, 'Social link created successfully', newLink);
  } catch (err) {
    generateResponse(res, 400, false, 'Failed to create social link', err.message);
  }
};

export const update = async (req, res) => {
  try {
    const updated = await socialLinkService.updateSocialLink(req.params.id, req.body);
    if (!updated) return generateResponse(res, 404, false, 'Social link not found');
    generateResponse(res, 200, true, 'Social link updated successfully', updated);
  } catch (err) {
    generateResponse(res, 400, false, 'Failed to update social link', err.message);
  }
};

export const remove = async (req, res) => {
  try {
    const deleted = await socialLinkService.deleteSocialLink(req.params.id);
    if (!deleted) return generateResponse(res, 404, false, 'Social link not found');
    generateResponse(res, 200, true, 'Social link deleted successfully', deleted);
  } catch (err) {
    generateResponse(res, 500, false, 'Failed to delete social link', err.message);
  }
};
