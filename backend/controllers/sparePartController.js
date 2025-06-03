import asyncHandler from 'express-async-handler';
import SparePart from '../models/sparePartModel.js';

// @desc    Create a new spare part
// @route   POST /api/spareparts
// @access  Private/Admin
const createSparePart = asyncHandler(async (req, res) => {
  const { name, quantity, price, supplier } = req.body;

  const sparePart = await SparePart.create({
    name,
    quantity,
    price,
    supplier,
  });

  if (sparePart) {
    res.status(201).json(sparePart);
  } else {
    res.status(400);
    throw new Error('Invalid spare part data');
  }
});

// @desc    Get all spare parts
// @route   GET /api/spareparts
// @access  Private/Admin
const getSpareParts = asyncHandler(async (req, res) => {
  const spareParts = await SparePart.find({});
  res.json(spareParts);
});

// @desc    Get a spare part by ID
// @route   GET /api/spareparts/:id
// @access  Private/Admin
const getSparePartById = asyncHandler(async (req, res) => {
  const sparePart = await SparePart.findById(req.params.id);

  if (sparePart) {
    res.json(sparePart);
  } else {
    res.status(404);
    throw new Error('Spare part not found');
  }
});

// @desc    Update a spare part
// @route   PUT /api/spareparts/:id
// @access  Private/Admin
const updateSparePart = asyncHandler(async (req, res) => {
  const sparePart = await SparePart.findById(req.params.id);

  if (sparePart) {
    sparePart.name = req.body.name || sparePart.name;
    sparePart.quantity = req.body.quantity !== undefined ? req.body.quantity : sparePart.quantity;
    sparePart.price = req.body.price !== undefined ? req.body.price : sparePart.price;
    sparePart.supplier = req.body.supplier || sparePart.supplier;

    const updatedSparePart = await sparePart.save();
    res.json(updatedSparePart);
  } else {
    res.status(404);
    throw new Error('Spare part not found');
  }
});

// @desc    Delete a spare part
// @route   DELETE /api/spareparts/:id
// @access  Private/Admin
const deleteSparePart = asyncHandler(async (req, res) => {
  const sparePart = await SparePart.findById(req.params.id);

  if (sparePart) {
    await SparePart.deleteOne({ _id: req.params.id });
    res.json({ message: 'Spare part removed' });
  } else {
    res.status(404);
    throw new Error('Spare part not found');
  }
});

export {
  createSparePart,
  getSpareParts,
  getSparePartById,
  updateSparePart,
  deleteSparePart,
};