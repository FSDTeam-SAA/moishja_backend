import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema(
  {
    city: { type: String, required: true },
    suburb: { type: String, required: true },
    state: { type: String, required: true },
    postcode: {
      type: String,
      required: true,
      trim: true,
      match: /^[0-9]{4,6}$/
    }
  },
  { _id: false }
);

const contactSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    mobile: {
      type: String,
      required: true,
      trim: true,
      match: /^[0-9]{8,15}$/
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    address: { type: addressSchema, required: true }
  },
  { _id: false }
);

const removalRequestSchema = new mongoose.Schema(

  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    senderInfo: { type: contactSchema, required: true },
    recipientInfo: { type: contactSchema, required: true },

    movingDate: { type: Date, required: true },
    needPacking: { type: Boolean, default: false },
    otherServices: {
      type: [String],
      default: [],
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'in-progress', 'completed', 'rejected'],
      default: 'pending'
    }
  },
  { timestamps: true }
);

const RemovalRequest = mongoose.model('DeliveryRequest', removalRequestSchema);
export default RemovalRequest;
