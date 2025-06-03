import mongoose from 'mongoose';

const sparePartSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    supplier: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const SparePart = mongoose.model('SparePart', sparePartSchema);

export default SparePart;