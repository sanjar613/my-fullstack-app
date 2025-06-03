import mongoose from 'mongoose';

const feedbackSchema = mongoose.Schema(
  {
    requestId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'SupportRequest',
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;