import mongoose from 'mongoose';

const aboutUsSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, 'Content is required'],
      trim: true
    },
    metaTitle: {
      type: String,
      trim: true,
      maxlength: 150
    },
    metaDescription: {
      type: String,
      trim: true,
      maxlength: 300
    },
    focusKeywords: {
      type: [String],
      default: []
    }
  },
  { timestamps: true }
);

const AboutUs = mongoose.model('AboutUs', aboutUsSchema);
export default AboutUs;
