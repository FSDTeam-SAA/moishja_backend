import mongoose from "mongoose";

const socialLinkSchema = new mongoose.Schema({
  platform: {
    type: String,
    trim: true,
    required: true
  },
  url: {
    type: String,
    trim: true,
    required: true,
    match: /^https?:\/\/.+$/ // Basic URL validation
  }
});

const SocialLink = mongoose.model('SocialLink', socialLinkSchema);
export  default SocialLink;
