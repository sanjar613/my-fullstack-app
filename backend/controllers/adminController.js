import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import SupportRequest from '../models/supportRequestModel.js';
import KnowledgeBase from '../models/knowledgeBaseModel.js';
import Feedback from '../models/feedbackModel.js';

// @desc    Get admin dashboard data
// @route   GET /api/admin/dashboard
// @access  Private/Admin
const getAdminDashboard = asyncHandler(async (req, res) => {
  const totalUsers = await User.countDocuments({});
  const totalRequests = await SupportRequest.countDocuments({});
  const totalFeedback = await Feedback.countDocuments({});
  const totalArticles = await KnowledgeBase.countDocuments({});

  const recentUsers = await User.find({})
    .sort({ createdAt: -1 })
    .limit(5)
    .select('-password');

  const recentRequests = await SupportRequest.find({})
    .sort({ createdAt: -1 })
    .limit(5)
    .populate('userId', 'name email');

  res.json({
    stats: {
      totalUsers,
      totalRequests,
      totalFeedback,
      totalArticles
    },
    recentUsers,
    recentRequests
  });
});

// @desc    Get all users
// @route   GET /api/admin/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}).select('-password');
  res.json(users);
});

// @desc    Update user
// @route   PUT /api/admin/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.role = req.body.role || user.role;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc    Delete user
// @route   DELETE /api/admin/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    if (user.role === 'admin') {
      res.status(400);
      throw new Error('Cannot delete admin user');
    }
    await User.deleteOne({ _id: req.params.id });
    res.json({ message: 'User removed' });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc    Get all requests
// @route   GET /api/admin/requests
// @access  Private/Admin
const getRequests = asyncHandler(async (req, res) => {
  const requests = await SupportRequest.find({})
    .populate('userId', 'name email')
    .sort({ createdAt: -1 });
  res.json(requests);
});

// @desc    Get all feedback
// @route   GET /api/admin/feedback
// @access  Private/Admin
const getFeedback = asyncHandler(async (req, res) => {
  const feedback = await Feedback.find({})
    .populate('userId', 'name email')
    .populate('requestId', 'issueSummary')
    .sort({ createdAt: -1 });
  res.json(feedback);
});

export {
  getAdminDashboard,
  getUsers,
  updateUser,
  deleteUser,
  getRequests,
  getFeedback
};