import asyncHandler from 'express-async-handler';
import SupportRequest from '../models/supportRequestModel.js';
import Feedback from '../models/feedbackModel.js';

// @desc    Get summary analytics data
// @route   GET /api/analytics/summary
// @access  Private/Admin
const getSummaryAnalytics = asyncHandler(async (req, res) => {
  // Count total requests by status
  const totalRequests = await SupportRequest.countDocuments({});
  const pendingRequests = await SupportRequest.countDocuments({ status: 'pending' });
  const scheduledRequests = await SupportRequest.countDocuments({ status: 'scheduled' });
  const inProgressRequests = await SupportRequest.countDocuments({ status: 'in-progress' });
  const resolvedRequests = await SupportRequest.countDocuments({ status: 'resolved' });

  // Count requests by priority
  const highPriorityRequests = await SupportRequest.countDocuments({ priority: 'high' });
  const mediumPriorityRequests = await SupportRequest.countDocuments({ priority: 'medium' });
  const lowPriorityRequests = await SupportRequest.countDocuments({ priority: 'low' });

  // Calculate average feedback rating
  const feedbacks = await Feedback.find({});
  const totalRating = feedbacks.reduce((sum, feedback) => sum + feedback.rating, 0);
  const averageRating = feedbacks.length > 0 ? (totalRating / feedbacks.length).toFixed(1) : 0;

  res.json({
    totalRequests,
    byStatus: {
      pending: pendingRequests,
      scheduled: scheduledRequests,
      inProgress: inProgressRequests,
      resolved: resolvedRequests,
    },
    byPriority: {
      high: highPriorityRequests,
      medium: mediumPriorityRequests,
      low: lowPriorityRequests,
    },
    feedback: {
      total: feedbacks.length,
      averageRating,
    },
  });
});

// @desc    Get common issues analytics
// @route   GET /api/analytics/common-issues
// @access  Private/Admin
const getCommonIssuesAnalytics = asyncHandler(async (req, res) => {
  const commonIssues = await SupportRequest.aggregate([
    {
      $group: {
        _id: '$deviceType',
        count: { $sum: 1 },
      },
    },
    {
      $sort: { count: -1 },
    },
    {
      $limit: 5,
    },
  ]);

  res.json(commonIssues);
});

// @desc    Get completion time analytics
// @route   GET /api/analytics/completion-time
// @access  Private/Admin
const getCompletionTimeAnalytics = asyncHandler(async (req, res) => {
  // Get resolved requests and calculate time to completion
  const resolvedRequests = await SupportRequest.find({ status: 'resolved' });
  
  // Calculate average completion time in days
  const completionTimes = resolvedRequests.map((request) => {
    const createdDate = new Date(request.createdAt);
    const updatedDate = new Date(request.updatedAt);
    const diffTime = Math.abs(updatedDate - createdDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  });

  const totalCompletionTime = completionTimes.reduce((sum, time) => sum + time, 0);
  const averageCompletionTime = completionTimes.length > 0 ? (totalCompletionTime / completionTimes.length).toFixed(1) : 0;

  // Get completion time by priority
  const highPriorityRequests = resolvedRequests.filter(request => request.priority === 'high');
  const mediumPriorityRequests = resolvedRequests.filter(request => request.priority === 'medium');
  const lowPriorityRequests = resolvedRequests.filter(request => request.priority === 'low');

  const calculateAverageTime = (requests) => {
    const times = requests.map((request) => {
      const createdDate = new Date(request.createdAt);
      const updatedDate = new Date(request.updatedAt);
      const diffTime = Math.abs(updatedDate - createdDate);
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    });

    const total = times.reduce((sum, time) => sum + time, 0);
    return times.length > 0 ? (total / times.length).toFixed(1) : 0;
  };

  res.json({
    averageCompletionTime,
    totalResolved: resolvedRequests.length,
    byPriority: {
      high: {
        count: highPriorityRequests.length,
        averageTime: calculateAverageTime(highPriorityRequests),
      },
      medium: {
        count: mediumPriorityRequests.length,
        averageTime: calculateAverageTime(mediumPriorityRequests),
      },
      low: {
        count: lowPriorityRequests.length,
        averageTime: calculateAverageTime(lowPriorityRequests),
      },
    },
  });
});

export {
  getSummaryAnalytics,
  getCommonIssuesAnalytics,
  getCompletionTimeAnalytics,
};