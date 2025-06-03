import asyncHandler from 'express-async-handler';
import Feedback from '../models/feedbackModel.js';
import SupportRequest from '../models/supportRequestModel.js';

// @desc    Create a new feedback
// @route   POST /api/feedback
// @access  Private
const createFeedback = asyncHandler(async (req, res) => {
  const { requestId, rating, comment } = req.body;

  // Check if the request exists and is resolved
  const request = await SupportRequest.findById(requestId);

  if (!request) {
    res.status(404);
    throw new Error('Support request not found');
  }

  if (request.status !== 'resolved') {
    res.status(400);
    throw new Error('Can only provide feedback for resolved requests');
  }

  // Check if the request belongs to the user
  if (request.userId.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('Not authorized');
  }

  // Check if feedback already exists for this request
  const existingFeedback = await Feedback.findOne({ requestId });

  if (existingFeedback) {
    res.status(400);
    throw new Error('Feedback already submitted for this request');
  }

  const feedback = await Feedback.create({
    requestId,
    userId: req.user._id,
    rating,
    comment,
  });

  if (feedback) {
    res.status(201).json(feedback);
  } else {
    res.status(400);
    throw new Error('Invalid feedback data');
  }
});

// @desc    Get all feedback (admin only)
// @route   GET /api/feedback
// @access  Private/Admin
const getAllFeedback = asyncHandler(async (req, res) => {
  const feedback = await Feedback.find({})
    .populate('userId', 'name email')
    .populate('requestId', 'issueSummary deviceType');
  
  res.json(feedback);
});

// @desc    Get feedback for a specific request
// @route   GET /api/feedback/:requestId
// @access  Private
const getFeedbackByRequestId = asyncHandler(async (req, res) => {
  const requestId = req.params.requestId;
  
  // Check if the request exists
  const request = await SupportRequest.findById(requestId);

  if (!request) {
    res.status(404);
    throw new Error('Support request not found');
  }

  // Check if the request belongs to the user or if the user is an admin
  if (req.user.role !== 'admin' && request.userId.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('Not authorized');
  }

  const feedback = await Feedback.findOne({ requestId });

  if (feedback) {
    res.json(feedback);
  } else {
    res.status(404);
    throw new Error('No feedback found for this request');
  }
});

export {
  createFeedback,
  getAllFeedback,
  getFeedbackByRequestId,
};