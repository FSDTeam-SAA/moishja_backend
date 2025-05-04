import mongoose from 'mongoose';

const fastRemovalRequestSchema = new mongoose.Schema(
    
       {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
          },
    firstName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50
    },
    mobile: {
      type: String,
      required: true,
      trim: true,
      match: /^[0-9]{7,15}$/ 
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: /^\S+@\S+\.\S+$/ 
    },
    currentCity: {
      type: String,
      required: true,
      trim: true
    },
    currentSuburb: {
      type: String,
      required: true,
      trim: true
    },
    movingCity: {
      type: String,
      required: true,
      trim: true
    },
    houseSize: {
      type: String,
      enum: ['small', 'medium', 'big', 'apartment'],
      required: true
    },
    movingDate: {
      type: Date,
      required: true
    },
    movingOptions: {
      packing: { type: Boolean, default: false },
      cleaning: { type: Boolean, default: false }
    },
    
    deliveryNeeds: {
      unpacking: { type: Boolean, default: false },
      cleaning: { type: Boolean, default: false },
      storage: { type: Boolean, default: false }
    },
    description: {
      type: String,
      maxlength: 1000,
      trim: true
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'in-progress', 'completed', 'rejected'],
        default: 'pending'
      },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

const RemovalRequest = mongoose.model('RemovalRequest', fastRemovalRequestSchema);

export default RemovalRequest;
