import express from 'express';
import {
  getSummaryAnalytics,
  getCommonIssuesAnalytics,
  getCompletionTimeAnalytics,
} from '../controllers/analyticsController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/summary').get(protect, admin, getSummaryAnalytics);
router.route('/common-issues').get(protect, admin, getCommonIssuesAnalytics);
router.route('/completion-time').get(protect, admin, getCompletionTimeAnalytics);

export default router;