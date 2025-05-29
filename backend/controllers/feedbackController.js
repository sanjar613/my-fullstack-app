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


// Тестовые данные для добавления
async function addSampleFeedbacks() {
  const samples = [
    {
      requestId: '6836ac0c872a76f989bfdab6', // замени на реальные ID из SupportRequest
      userId: '6836ab5e872a76f989bfda97',   // замени на реальные ID пользователей
      rating: 5,
      comment: 'Excellent support!',
    },
    {
      requestId: '6836ac54872a76f989bfdabd',
      userId: '6836ab5e872a76f989bfda97',
      rating: 4,
      comment: 'Very helpful.',
    },
    {
      requestId: '64b2c3d4e5f678901234567a',
      userId: '64a1f2c3a1b2c3d4e5f67892',
      rating: 3,
      comment: 'Average experience.',
    },
    {
      requestId: '64b2c3d4e5f678901234567b',
      userId: '64a1f2c3a1b2c3d4e5f67893',
      rating: 2,
      comment: 'Not satisfied.',
    },
    {
      requestId: '64b2c3d4e5f678901234567c',
      userId: '64a1f2c3a1b2c3d4e5f67894',
      rating: 1,
      comment: 'Poor service.',
    },
    { requestId: '64b2c3d4e5f6789012345678', userId: '64a1f2c3a1b2c3d4e5f67890', rating: 5, comment: 'Excellent support!' },
    { requestId: '64b2c3d4e5f6789012345679', userId: '64a1f2c3a1b2c3d4e5f67891', rating: 5, comment: 'Fast and professional help.' },
    { requestId: '64b2c3d4e5f678901234567a', userId: '64a1f2c3a1b2c3d4e5f67892', rating: 4, comment: 'Very satisfied with the service.' },
    { requestId: '64b2c3d4e5f678901234567b', userId: '64a1f2c3a1b2c3d4e5f67893', rating: 4, comment: 'Helpful and friendly staff.' },
    { requestId: '64b2c3d4e5f678901234567c', userId: '64a1f2c3a1b2c3d4e5f67894', rating: 5, comment: 'Issue resolved quickly.' },
    { requestId: '64b2c3d4e5f678901234567d', userId: '64a1f2c3a1b2c3d4e5f67895', rating: 5, comment: 'Highly recommend this support team.' },
    { requestId: '64b2c3d4e5f678901234567e', userId: '64a1f2c3a1b2c3d4e5f67896', rating: 4, comment: 'Good communication and assistance.' },
    { requestId: '64b2c3d4e5f678901234567f', userId: '64a1f2c3a1b2c3d4e5f67897', rating: 5, comment: 'Prompt and effective solution.' },
    { requestId: '64b2c3d4e5f6789012345680', userId: '64a1f2c3a1b2c3d4e5f67898', rating: 4, comment: 'Very professional and courteous.' },
    { requestId: '64b2c3d4e5f6789012345681', userId: '64a1f2c3a1b2c3d4e5f67899', rating: 5, comment: 'Exceeded my expectations!' },
  ];

  for (const fb of samples) {
    try {
      await Feedback.create(fb);
      console.log('Added feedback:', fb);
    } catch (e) {
      console.error('Error adding feedback:', e.message);
    }
  }
}
addSampleFeedbacks()

// Раскомментируй для одноразового запуска
// addSampleFeedbacks();


export {
  createFeedback,
  getAllFeedback,
  getFeedbackByRequestId,
};