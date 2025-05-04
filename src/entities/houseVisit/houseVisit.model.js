import mongoose from 'mongoose';

const houseVisitSchema = new mongoose.Schema(
  {
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
      maxlength: 1000,
      trim: true
    },
    status: {
        type: String,
        enum: ['not-visited', 'visited', 'cancelled'],
        default: 'not-visited'
      },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

const HouseVisit = mongoose.model('HouseVisit', houseVisitSchema);

export default HouseVisit;
