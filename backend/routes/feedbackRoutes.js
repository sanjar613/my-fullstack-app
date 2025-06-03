import express from 'express';
import {
  createFeedback,
  getAllFeedback,
  getFeedbackByRequestId,
} from '../controllers/feedbackController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .post(protect, createFeedback)
  .get(protect, admin, getAllFeedback);

router.route('/:requestId').get(protect, getFeedbackByRequestId);

export default router;