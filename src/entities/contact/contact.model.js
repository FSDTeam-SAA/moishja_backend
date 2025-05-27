
import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema(
  {
    firstName: {
      required: [true, "First name is required"],
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
      required: [true, "Phone number is required"],
      type: String,
      trim: true,
      match: /^[0-9+\-\s()]{7,15}$/
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true
    },
    
  },
  {
    timestamps: true
  }
);

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
