import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true
    },
    lastName: {
      type: String,
      trim: true
    },
    address: {
      type: String,
      trim: true
    },
    phoneNumber: {
      type: String,
      trim: true,
      match: /^[0-9+\-\s()]{7,15}$/
    },
    message: {
      type: String,
      required: true,
      trim: true
    },
    socialLinks: [
      {
        platform: {
          type: String,
          trim: true
        },
        url: {
          type: String,
          trim: true,
          match: /^https?:\/\/.+$/ // Basic URL validation
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
