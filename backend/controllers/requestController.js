import asyncHandler from 'express-async-handler';
import SupportRequest from '../models/supportRequestModel.js';

// @desc    Create a new support request
// @route   POST /api/requests
// @access  Private
const createSupportRequest = asyncHandler(async (req, res) => {
  const {
    deviceType,
    issueSummary,
    description,
    location,
    priority,
    scheduleDate,
  } = req.body;

  const request = await SupportRequest.create({
    userId: req.user._id,
    deviceType,
    issueSummary,
    description,
    location,
    priority,
    scheduleDate,
  });

  if (request) {
    res.status(201).json(request);
  } else {
    res.status(400);
    throw new Error('Invalid request data');
  }
});

// @desc    Get all support requests for a user
// @route   GET /api/requests
// @access  Private
const getSupportRequests = asyncHandler(async (req, res) => {
  const requests = await SupportRequest.find({ userId: req.user._id });
  res.json(requests);
});

// @desc    Get a support request by ID
// @route   GET /api/requests/:id
// @access  Private
const getSupportRequestById = asyncHandler(async (req, res) => {
  const request = await SupportRequest.findById(req.params.id);

  if (request) {
    // Check if the request belongs to the user or if the user is an admin
    if (req.user.role === 'admin' || request.userId.toString() === req.user._id.toString()) {
      res.json(request);
    } else {
      res.status(401);
      throw new Error('Not authorized');
    }
  } else {
    res.status(404);
    throw new Error('Request not found');
  }
});

// @desc    Update a support request
// @route   PUT /api/requests/:id
// @access  Private
const updateSupportRequest = asyncHandler(async (req, res) => {
  const request = await SupportRequest.findById(req.params.id);

  if (request) {
    // Check if the request belongs to the user or if the user is an admin
    if (req.user.role === 'admin' || request.userId.toString() === req.user._id.toString()) {
      // If admin, allow updating all fields
      if (req.user.role === 'admin') {
        request.deviceType = req.body.deviceType || request.deviceType;
        request.issueSummary = req.body.issueSummary || request.issueSummary;
        request.description = req.body.description || request.description;
        request.location = req.body.location || request.location;
        request.status = req.body.status || request.status;
        request.priority = req.body.priority || request.priority;
        request.scheduleDate = req.body.scheduleDate || request.scheduleDate;
        request.assignedTechnician = req.body.assignedTechnician || request.assignedTechnician;
        request.notes = req.body.notes || request.notes;
        
        // Update quote if provided
        if (req.body.quote) {
          request.quote = {
            amount: req.body.quote.amount || request.quote?.amount,
            details: req.body.quote.details || request.quote?.details,
            date: req.body.quote.date || new Date()
          };
        }
      } else {
        // Regular users can only update certain fields if the status is still 'pending'
        if (request.status === 'pending') {
          request.deviceType = req.body.deviceType || request.deviceType;
          request.issueSummary = req.body.issueSummary || request.issueSummary;
          request.description = req.body.description || request.description;
          request.location = req.body.location || request.location;
          request.scheduleDate = req.body.scheduleDate || request.scheduleDate;
        } else {
          res.status(400);
          throw new Error('Cannot update request that is not in pending status');
        }
      }

      const updatedRequest = await request.save();
      res.json(updatedRequest);
    } else {
      res.status(401);
      throw new Error('Not authorized');
    }
  } else {
    res.status(404);
    throw new Error('Request not found');
  }
});

// @desc    Delete a support request
// @route   DELETE /api/requests/:id
// @access  Private
const deleteSupportRequest = asyncHandler(async (req, res) => {
  const request = await SupportRequest.findById(req.params.id);

  if (request) {
    // Check if the request belongs to the user or if the user is an admin
    if (req.user.role === 'admin' || request.userId.toString() === req.user._id.toString()) {
      // Only allow deletion if the status is still 'pending'
      if (request.status === 'pending' || req.user.role === 'admin') {
        await SupportRequest.deleteOne({ _id: req.params.id });
        res.json({ message: 'Request removed' });
      } else {
        res.status(400);
        throw new Error('Cannot delete request that is not in pending status');
      }
    } else {
      res.status(401);
      throw new Error('Not authorized');
    }
  } else {
    res.status(404);
    throw new Error('Request not found');
  }
});

// @desc    Get all support requests (admin only)
// @route   GET /api/requests/all
// @access  Private/Admin
const getAllSupportRequests = asyncHandler(async (req, res) => {
  const requests = await SupportRequest.find({}).populate('userId', 'name email role');
  res.json(requests);
});

export {
  createSupportRequest,
  getSupportRequests,
  getSupportRequestById,
  updateSupportRequest,
  deleteSupportRequest,
  getAllSupportRequests,
};