import mongoose from 'mongoose';

const houseVisitSchema = new mongoose.Schema(
  {
     serviceName: { type: mongoose.Schema.Types.ObjectId, ref: 'Service',required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50
    },
    mobile: {
      type: String,
      required: true,
      trim: true
    },
    currentAddress: {
      type: String,
      required: true,
      trim: true
    },
    movingAddress: {
      type: String,
      required: true,
      trim: true
    },
    movingType: {
      type: String,
      enum: ['local', 'international'],
      required: true
    },
    comments: {
      type: String,
      maxLength: 1000,
      trim: true
    },
    status: {
      type: String,
      enum: ['requested', 'not-visited', 'visited', 'cancelled'],
      default: 'requested'
    },
  },
  { timestamps: true }
);

const HouseVisit = mongoose.model('HouseVisit', houseVisitSchema);

export default HouseVisit;
